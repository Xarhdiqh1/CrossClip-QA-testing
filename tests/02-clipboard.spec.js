// clipboard.spec.js
import { test, expect } from '@playwright/test';

// Use stored login session
test.use({ storageState: 'storageState.json' });

test('User can create a clipboard item', async ({ page }) => {
  // Go directly to your app (no login needed)
  await page.goto('https://cross-clip.vercel.app/');

  // Interact with clipboard input
  const clipboardInput = page.getByRole('textbox', { name: 'Paste text, drop a file, or' });
  await clipboardInput.click();
  await clipboardInput.fill('Welcome to CrossClip!');

  // Add the clipboard item
  await page.getByRole('button', { name: 'Add' }).click();

  // Assert the new item is visible
  await expect(page.getByText('Welcome to CrossClip!').first()).toBeVisible();
});