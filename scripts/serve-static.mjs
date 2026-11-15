// Serves the prerendered pages of the Vercel build (.vercel/output/static),
// the way Vercel resolves them: `/foo` → `foo/index.html`, unknown paths → 404.html
// with a 404 status. `astro preview` is not an option: the Vercel adapter refuses it.
// API routes (/api/contact) are not served.
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';

const root = path.resolve('.vercel/output/static');
const port = Number(process.env.PORT ?? 4322);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
};

async function findFile(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const base = path.join(root, path.normalize(decoded));
  if (!base.startsWith(root)) return undefined;

  for (const candidate of [
    base,
    path.join(base, 'index.html'),
    `${base}.html`,
  ]) {
    const info = await stat(candidate).catch(() => undefined);
    if (info?.isFile()) return candidate;
  }
  return undefined;
}

function send(res, status, file) {
  const type = contentTypes[path.extname(file)] ?? 'application/octet-stream';
  res.writeHead(status, { 'content-type': type });
  createReadStream(file).pipe(res);
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? '/', 'http://localhost');
  const file = await findFile(pathname);
  if (file) send(res, 200, file);
  else send(res, 404, path.join(root, '404.html'));
}).listen(port, () => {
  console.log(`Serving ${root} on http://localhost:${port}`);
});
