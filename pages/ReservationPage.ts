import { Page, expect } from '@playwright/test';

export class ReservationPage {
  constructor(private page: Page) {}

  async verifyReservationPage(expectedRoom: string) {
    
    await expect(this.page).toHaveURL(/\/reservation/);

   
    await expect(this.page.locator('h1')).toHaveText(expectedRoom);

    const header = this.page.locator('h1');
    await expect(header).toHaveText(expectedRoom);
  
}

  async verifyCalendarDisplayed() {
    
    await expect(this.page.locator('.rbc-calendar')).toBeVisible();
  
}

  async extractPrice(): Promise<number> {
    
    const priceText = await this.page.locator('.d-flex.justify-content-between.fw-bold span').nth(1).textContent();
    return parseInt(priceText?.replace(/[^\d]/g, '') || '0');
  }

  async clickReserveNow() {
    
    await this.page.getByRole('button', { name: 'Reserve Now' }).click();
  }
}
