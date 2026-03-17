import { test as setup, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // load env variables

setup('authenticate', async ({ page, context }) => {
  await page.goto('https://cross-clip.vercel.app/auth');

  await page.getByRole('textbox', { name: 'you@example.com' }).fill(process.env.CROSSCLIP_EMAIL);
  await page.getByRole('textbox', { name: '••••••••' }).fill(process.env.CROSSCLIP_PASSWORD);

  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('button', { name: 'Sign out' })).toBeVisible();

  await context.storageState({ path: 'storageState.json' });
});





// import { test as setup, expect } from '@playwright/test';

// setup('authenticate', async ({ page }) => {
//   await page.goto('https://cross-clip.vercel.app/auth');

//   await page.getByRole('textbox', { name: 'you@example.com' }).fill('rigqidas@gmail.com');
//   await page.getByRole('textbox', { name: '••••••••' }).fill('Qwerty');

//   await page.getByRole('button', { name: 'Sign in' }).click();

//   await expect(page.getByRole('button', { name: 'Sign out' })).toBeVisible();

//   // Save session
//   await page.context().storageState({ path: 'storageState.json' });
// });

