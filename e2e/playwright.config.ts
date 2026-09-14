import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://localhost:5199', screenshot: 'only-on-failure' },
  webServer: {
    command: 'npm run dev -- --port 5199 --strictPort',
    cwd: '/home/rakha/Work/lifeos-web',
    url: 'http://localhost:5199',
    reuseExistingServer: true,
    env: { VITE_API_URL: 'http://localhost:18091' },
  },
  reporter: [['json', { outputFile: '../reports/playwright.json' }]],
});
