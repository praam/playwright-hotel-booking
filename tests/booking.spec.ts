import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ReservationPage } from '../pages/ReservationPage';
import { BookingFormPage } from '../pages/BookingFormPage';
import * as bookingData from '../data/bookingData.json';

test.describe('Hotel Booking Flow', () => {
  test('User books a room successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const reservationPage = new ReservationPage(page);
    const bookingFormPage = new BookingFormPage(page);

    // 1. User opens https://automationintesting.online/
    //2. User clicks on `Book Now` button placed on a hero (top of a page)
    await homePage.goto();
    await homePage.clickHeroBookNow();

    //User chooses Suite room type and clicks on `Book Now` button related to specific cart.
    await homePage.selectRoom(3); 

    //check if page URL contains `/reservation`
    //check if page displays correct header (regarding which room option you have chosen)
    await reservationPage.verifyReservationPage(bookingData.roomType);
      
    //check if calendar has been successfully displayed
    await reservationPage.verifyCalendarDisplayed();

    // check if amount displayed in `Price Summary` section is correct ( should be equal number of selected days \* price per night)
    const price = await reservationPage.extractPrice();
    console.log('Extracted Price:', price);

    //User clicks on `Reserve Now` button \
    await reservationPage.clickReserveNow();

    // User fills a `Book This Room` form 
    await bookingFormPage.fillForm(
      bookingData.firstname,
      bookingData.lastname,
      bookingData.email,
      bookingData.phone
    );

    // clicks on "Reserve Now" button 
    await bookingFormPage.submitForm();

    // 8. User is able to see `Booking Confirmed` section.
   //  9.Displayed dates should cover same time period that has been previously chosen by user.
    await bookingFormPage.verifyBookingConfirmed(
      bookingData.checkInDate,
      bookingData.checkOutDate
    );
  });
});