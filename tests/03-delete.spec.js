// delete.spec.js
import { test, expect } from '@playwright/test';

// Use stored login session
test.use({ storageState: 'storageState.json' });

test('User can delete a clipboard item', async ({ page }) => {
  // Go directly to your app
  await page.goto('https://cross-clip.vercel.app/');

  // Create a clipboard item first (so there is something to delete)
  const clipboardInput = page.getByRole('textbox', { name: 'Paste text, drop a file, or' });
  await clipboardInput.click();
  await clipboardInput.fill('Welcome to CrossClip!');
  await page.getByRole('button', { name: 'Add' }).click();

  // Confirm the item was added
  await expect(page.getByText('Welcome to CrossClip!').first()).toBeVisible();

  // Delete the item
  await page.getByRole('button', { name: 'Delete' }).first().click();

  // Assert the item is no longer visible
  await expect(page.getByText('Welcome to CrossClip!').first()).not.toBeVisible();
});