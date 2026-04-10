import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targets = [
  {
    url: 'https://staging.parentup.eu/',
    dest: 'src/assets/projects/parentup/landing.png',
  },
  {
    url: 'https://staging.codehaven.eu/',
    dest: 'src/assets/projects/all-previews/p0.png',
  },
  {
    url: 'https://africazon.vercel.app/',
    dest: 'src/assets/projects/all-previews/p1.png',
  },
  {
    url: 'https://e-commerce-cms-ney3.vercel.app/',
    dest: 'src/assets/projects/all-previews/p2.png',
  },
  {
    url: 'https://e-commerce-cms-ebon.vercel.app/',
    dest: 'src/assets/projects/all-previews/p3.png',
  },
  {
    url: 'https://terral-hub-senegal.vercel.app/',
    dest: 'src/assets/projects/all-previews/p4.png',
  },
  {
    url: 'https://avionics-effect.vercel.app/',
    dest: 'src/assets/projects/all-previews/p6.png',
  },
];

async function capture() {
  console.log('Starting screenshot capture...');
  const browser = await chromium.launch({ headless: true });
  // Creating a high-res Retina Macbook-like viewport Context
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: 'light', // Default to light mode for crisp professional look, unless specified otherwise
  });

  for (const target of targets) {
    const page = await context.newPage();
    console.log(`Navigating to ${target.url}...`);
    try {
      await page.goto(target.url, { waitUntil: 'networkidle', timeout: 45000 });
      // Wait extra 2 seconds for custom fade-in animations or lazy loaded images to complete
      await page.waitForTimeout(2000);

      const destPath = path.resolve(__dirname, target.dest);
      await page.screenshot({ path: destPath });
      console.log(`Saved screenshot to ${target.dest}`);
    } catch (err) {
      console.error(`Failed to capture ${target.url}:`, err.message);
    }
    await page.close();
  }

  await browser.close();
  console.log('Capture complete!');
}

capture().catch(console.error);
