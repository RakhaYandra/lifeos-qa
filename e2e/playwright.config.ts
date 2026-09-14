import path from 'node:path';
import { defineConfig } from '@playwright/test';

const WEB_DIR = process.env.LIFEOS_WEB_DIR ?? path.resolve(__dirname, '../../lifeos-web');

export default defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://localhost:5199', screenshot: 'only-on-failure' },
  webServer: {
    command: 'npm run dev -- --port 5199 --strictPort',
    cwd: WEB_DIR,
    url: 'http://localhost:5199',
    reuseExistingServer: true,
    env: {
      VITE_API_URL: process.env.VITE_API_URL ?? 'http://localhost:18091',
      QA_PASSWORD: process.env.QA_PASSWORD ?? '',
    },
  },
  reporter: [['json', { outputFile: '../reports/playwright.json' }]],
});
