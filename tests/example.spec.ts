// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


import { test, expect } from '@playwright/test';

test.describe('Basic Form', () => {

  test('renders all inputs (check labels)', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.locator('.q-field__label', { hasText: 'Full Name' })).toBeVisible();
    await expect(page.locator('.q-field__label', { hasText: 'Email' })).toBeVisible();
    await expect(page.locator('.q-field__label', { hasText: 'Password' })).toBeVisible();
  });

  test('fills the form and submits (simulate alert)', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // กรอก input
    await page.locator('input').nth(0).fill('Panachai');
    await page.locator('input').nth(1).fill('test@example.com');
    await page.locator('input').nth(2).fill('1234');

    // จับ alert
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('ชื่อ: Panachai\nอีเมล: test@example.com');
      await dialog.dismiss();
    });

    await page.click('button:has-text("Submit")');
  });

  test('resets the form correctly', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // กรอก input
    await page.locator('input').nth(0).fill('Panachai');
    await page.locator('input').nth(1).fill('test@example.com');
    await page.locator('input').nth(2).fill('1234');

    // กด reset
    await page.click('button:has-text("Reset")');

    // ตรวจสอบค่ากลับเป็น empty
    await expect(page.locator('input').nth(0)).toHaveValue('');
    await expect(page.locator('input').nth(1)).toHaveValue('');
    await expect(page.locator('input').nth(2)).toHaveValue('');
  });

});
