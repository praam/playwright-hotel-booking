import { Page, expect } from '@playwright/test';

export class BookingFormPage {
  constructor(private page: Page) {}

  async fillForm(firstname: string, lastname: string, email: string, phone: string) {
    await this.page.fill('input[name="firstname"]', firstname);
    await this.page.fill('input[name="lastname"]', lastname);
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="phone"]', phone);
  }

  async submitForm() {
    await this.page.getByRole('button', { name: 'Reserve Now' }).click();
  }

  async verifyBookingConfirmed(checkInDate: string, checkOutDate: string) {
    await expect(this.page.locator('text=Booking Confirmed')).toBeVisible();

    const confirmationText = await this.page.locator('p.text-center.pt-2 strong').innerText();
    console.log("Confirmed Dates:", confirmationText);

    const [confirmedCheckIn, confirmedCheckOut] = confirmationText.split(" - ");

    expect(confirmedCheckIn).toBe(checkInDate);
    expect(confirmedCheckOut).toBe(checkOutDate);
  }
}