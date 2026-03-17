// login.spec.js
import { test, expect } from '@playwright/test';

// Use the stored login session from auth.setup.spec.js
test.use({ storageState: 'storageState.json' });

test('User is already logged in', async ({ page }) => {
  // Go directly to the app or dashboard
  await page.goto('https://cross-clip.vercel.app/');

  // Verify login by checking Sign out button is visible
  await expect(page.getByRole('button', { name: 'Sign out' })).toBeVisible();
});