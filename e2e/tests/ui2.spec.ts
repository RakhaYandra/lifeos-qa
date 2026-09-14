import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('TC-REM-02 batal hapus reminder tetap ada', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Pengingat' }).click();
  await expect(page.getByText('Bayar kos Oktober')).toBeVisible();
  page.on('dialog', (d) => d.dismiss());
  const row = page.locator('div.flex', { hasText: 'Bayar kos Oktober' });
  await row.getByText('DEL', { exact: true }).click();
  await expect(page.getByText('Bayar kos Oktober')).toBeVisible();
});

test('TC-GOAL-05 UI update progres', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Goals' }).click();
  const card = page.locator('div', { hasText: 'Dana darurat 20jt' }).last();
  await card.getByText('UPDATE', { exact: true }).click();
  await page.getByRole('spinbutton').fill('9000000');
  await page.getByRole('button', { name: 'Simpan' }).click();
  await expect(page.getByText('45%').first()).toBeVisible();
});

test('TC-HABIT-01 UI centang naikkan streak', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Habits' }).click();
  const row = page.locator('div', { hasText: 'Olahraga 20 menit' }).last();
  await row.getByText('CENTANG', { exact: true }).click();
  await expect(page.getByText(/streak 2\d/).first()).toBeVisible();
});

test('TC-REV-02 UI buat review bulanan', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('button', { name: 'monthly', exact: true }).click();
  await page.getByRole('button', { name: 'Tulis review' }).click();
  const boxes = page.getByRole('textbox');
  await boxes.nth(0).fill('2026-10');
  await boxes.nth(1).fill('QA e2e');
  await page.getByRole('button', { name: 'Simpan' }).click();
  await expect(page.getByText('2026-10')).toBeVisible();
});
