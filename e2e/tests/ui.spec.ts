import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('TC-AUTH-05 token rusak auto-logout', async ({ page }) => {
  await login(page);
  await expect(page.getByRole('button', { name: 'Tugas' })).toBeVisible();
  await page.evaluate(() => localStorage.setItem('lifeos_token', 'rusak'));
  await page.reload();
  await expect(page.getByRole('button', { name: 'Masuk' })).toBeVisible();
});

test('TC-TASK-07 batal hapus task tetap ada', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Tugas' }).click();
  const probe = `QA nodel ${Date.now()}`;
  await page.getByPlaceholder(/inbox/i).fill(probe);
  await page.getByRole('button', { name: 'Catat' }).click();
  await expect(page.getByText(probe)).toBeVisible();
  page.on('dialog', (d) => d.dismiss());
  const row = page.locator('div.flex', { hasText: probe });
  await row.getByText('DEL', { exact: true }).click();
  await expect(page.getByText(probe)).toBeVisible();
});

test('TC-CAL-02 navigasi bulan', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Kalender' }).click();
  await page.getByText('→').click();
  await expect(page.locator('main')).toContainText('2026-10');
  await page.getByText('←').click();
  await expect(page.locator('main')).toContainText('2026-09');
});
