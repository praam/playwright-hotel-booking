import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://automationintesting.online/', { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveTitle(/Restful-booker-platform demo/);
  }

  async clickHeroBookNow() {
    await this.page.locator('#booking').first().click();
  }

  async selectRoom(roomIndex: number) {
    const bookButton = this.page.locator('a.btn.btn-primary', { hasText: 'Book now' }).nth(roomIndex);
    await bookButton.scrollIntoViewIfNeeded();
    await bookButton.click();
  }
}

