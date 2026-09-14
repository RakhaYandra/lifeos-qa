import type { Page } from '@playwright/test';

export const QA_EMAIL = process.env.QA_EMAIL ?? 'aku@lifeos.local';

export function qaPassword(): string {
  const p = process.env.QA_PASSWORD;
  if (!p) throw new Error('QA_PASSWORD belum di-set (lihat e2e/.env.example)');
  return p;
}

export async function login(page: Page, email = QA_EMAIL, pass = qaPassword()) {
  await page.goto('/');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Kata sandi').fill(pass);
  await page.getByRole('button', { name: 'Masuk' }).click();
}
