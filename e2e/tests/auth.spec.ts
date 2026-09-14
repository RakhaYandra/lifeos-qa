import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('TC-AUTH-01 login benar masuk dashboard', async ({ page }) => {
  await login(page);
  await expect(page.getByText('tasks due today', { exact: false }).first()).toBeVisible();
});

test('TC-AUTH-02 UI password salah ditolak', async ({ page }) => {
  await login(page, 'aku@lifeos.local', 'salah1234');
  await expect(page.getByText('Email atau kata sandi salah')).toBeVisible();
});

test('TC-AUTH-06 logout bersihkan sesi', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Keluar' }).click();
  await expect(page.getByRole('button', { name: 'Masuk' })).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem('lifeos_token'))).toBeNull();
});
