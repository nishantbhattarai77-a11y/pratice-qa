import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.gobuild.live/');
  await page.getByRole('textbox', { name: 'Email or Phone' }).click();
  await page.getByRole('textbox', { name: 'Email or Phone' }).fill('9863336120');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('A');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Asmi@@123');
  await page.getByRole('img').nth(3).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('.', { exact: true }).click();
  await page.getByRole('button', { name: 'Organization & view settings' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
   await page.getByRole('textbox', { name: 'Email or Phone' }).click();
  await page.getByRole('textbox', { name: 'Email or Phone' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
});
});