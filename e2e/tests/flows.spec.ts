import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('TC-DASH-01 KPI cocok seed', async ({ page }) => {
  await login(page);
  await expect(page.getByText('tasks due today').first()).toBeVisible();
  const body = await page.textContent('main');
  expect(body).toContain('4');
  expect(body).toMatch(/7\.334\.001|7334001/);
});

test('TC-TASK-01 quick-add inbox', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Tugas' }).click();
  const probe = `QA e2e ${Date.now()}`;
  await page.getByPlaceholder(/inbox/i).fill(probe);
  await page.getByRole('button', { name: 'Catat' }).click();
  await expect(page.getByText(probe)).toBeVisible();
});

test('TC-TASK-02 filter completed', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Tugas' }).click();
  await page.locator('select').first().selectOption('completed');
  await expect(page.locator('main')).not.toContainText('OVERDUE');
});

test('TC-TASK-03 toggle hari ini', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Tugas' }).click();
  await page.getByRole('button', { name: 'Hari ini' }).click();
  await expect(page.getByText(/tasks · 4/).first()).toBeVisible();
});

test('TC-TASK-04 DONE selesaikan task', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Tugas' }).click();
  const probe = `QA done ${Date.now()}`;
  await page.getByPlaceholder(/inbox/i).fill(probe);
  await page.getByRole('button', { name: 'Catat' }).click();
  const row = page.locator('div.flex', { hasText: probe });
  await row.getByText('DONE', { exact: true }).click();
  await expect(page.getByText('Selesai.')).toBeVisible();
});

test('TC-GOAL-01 tiga tab level', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Goals' }).click();
  await page.getByRole('button', { name: 'quarterly', exact: true }).click();
  await expect(page.getByText('Q3 nabung 6jt')).toBeVisible();
  await page.getByRole('button', { name: 'monthly', exact: true }).click();
  await expect(page.getByText('Nabung September')).toBeVisible();
});

test('TC-HABIT-02 heatmap 30 kotak', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Habits' }).click();
  await expect(page.locator('span[title^="2026-"]')).toHaveCount(150);
});

test('TC-FIN-01 summary bulan', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Keuangan' }).click();
  await expect(page.getByText(/7\.334\.001/)).toBeVisible();
});

test('TC-REV-01 tiga tab review', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('button', { name: 'monthly', exact: true }).click();
  await expect(page.getByText('2026-09').first()).toBeVisible();
  await page.getByRole('button', { name: 'yearly', exact: true }).click();
  await expect(page.getByText('LifeOS MVP live')).toBeVisible();
});

test('TC-CAL-01 agregat tampil', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Kalender' }).click();
  const body = await page.textContent('main');
  expect(body).toMatch(/▸|◎|₿|◆/);
});

test('TC-DEC-01 ranking tampil', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Keputusan' }).click();
  await expect(page.getByText('#1 ThinkPad X1')).toBeVisible();
});
