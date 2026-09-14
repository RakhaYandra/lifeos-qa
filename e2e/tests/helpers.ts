import type { Page } from '@playwright/test';

export async function login(page: Page, email = 'aku@lifeos.local', pass = 'Rahasia123') {
  await page.goto('/');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Kata sandi').fill(pass);
  await page.getByRole('button', { name: 'Masuk' }).click();
}
