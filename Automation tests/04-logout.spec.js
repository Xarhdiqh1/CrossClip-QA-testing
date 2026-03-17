// logout.spec.js
import { test, expect } from '@playwright/test';

// Use stored login session
test.use({ storageState: 'storageState.json' });

test('User can logout', async ({ page }) => {
  // Go directly to the app
  await page.goto('https://cross-clip.vercel.app/');

  // Make sure the user is logged in
  await expect(page.getByRole('button', { name: 'Sign out' })).toBeVisible();

  // Click Sign out
  await page.getByRole('button', { name: 'Sign out' }).click();

  // Verify logout by checking that the welcome heading is visible
  await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
});