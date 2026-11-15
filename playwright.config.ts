import { defineConfig, devices } from '@playwright/test';

// The suite runs against the built site: `pnpm test:e2e` builds first, then
// Playwright starts the static server below on the build output.
const port = 4322;

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: `http://localhost:${port}`,
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'node scripts/serve-static.mjs',
    env: { PORT: String(port) },
    url: `http://localhost:${port}/`,
    reuseExistingServer: !process.env.CI,
  },
});
