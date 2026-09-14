import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('TC-CAL-03 halaman kalender render', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Kalender' }).click();
  await expect(page.getByText('2026-09')).toBeVisible();
  await expect(page.getByText(/task.*reminder.*subs.*milestone|▸task/i).first()).toBeVisible();
});

test('TC-TRV-03 halaman travel lengkap', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Travel' }).click();
  await expect(page.getByText('Bandung 2 hari').nth(1)).toBeVisible();
  await expect(page.getByText('Kereta Gambir-Kiaracondang')).toBeVisible();
  await expect(page.getByText(/Jaket/).first()).toBeVisible();
});

test('TC-DEC-03 halaman keputusan + tambah opsi', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Keputusan' }).click();
  await expect(page.getByText('#1 ThinkPad X1')).toBeVisible();
  const probe = `Opsi${Date.now()}`;
  await page.getByPlaceholder('Opsi baru…').fill(probe);
  await page.getByRole('button', { name: 'Tambah' }).click();
  await expect(page.getByText(probe)).toBeVisible();
});

test('TC-AST-03 halaman aset 3 seksi', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Aset' }).click();
  await expect(page.getByText('ThinkPad T480')).toBeVisible();
  await expect(page.getByText('Sepatu lari baru')).toBeVisible();
  await expect(page.getByText('Kontrak kos')).toBeVisible();
});

test('TC-CTC-03 halaman relasi tambah kontak', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Relasi' }).click();
  await expect(page.getByText('Budi').first()).toBeVisible();
  const probe = `Kawan${Date.now()}`;
  await page.getByRole('button', { name: 'Tambah kontak' }).click();
  await page.getByLabel('Nama').fill(probe);
  await page.getByRole('button', { name: 'Simpan' }).click();
  await expect(page.getByText(probe)).toBeVisible();
});
