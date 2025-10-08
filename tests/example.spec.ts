import { test, expect } from '@playwright/test';

test('fill and submit the basic form', async ({ page }) => {
  await page.goto('http://localhost:9000');

  await page.fill('input[label="Full Name"]', 'สมชาย ทดสอบ');
  await page.fill('input[label="Email"]', 'somchai@test.com');
  await page.fill('input[label="Password"]', '123456');

  await page.click('button:has-text("Submit")');

  // ตรวจสอบว่ามี alert หรือข้อความขึ้น
  page.once('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    await dialog.dismiss();
  });
});
