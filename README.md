Playwright automation framework for hotel booking application, using Page Object Model, data-driven testing, and best coding practices for UI and functional validation.

Created a playwright tests to cover following user steps:

1. User opens https://automationintesting.online
2. User clicks on `Book Now` button placed on a hero (top of a page)
3. User chooses one of room type and clicks on `Book Now` button related to specific cart.
4. User is able to see a reservation page 
5. check if page URL contains `/reservation`
6. check if page displays correct header (regarding which room option you have chosen)
7. check if calendar has been successfully displayed
8. User selects specific amount of days on calendar
9. check if amount displayed in `Price Summary` section is correct ( should be equal number of selected days \* price per night)
10. User clicks on `Reserve Now` button \
11. User fills a `Book This Room` form and clicks on "Reserve Now" button \
12. User is able to see `Booking Confirmed` section.
13. Displayed dates should cover same time period that has been previously chosen by user.

Tech Stack

Playwright: UI Automation
TypeScript: Strongly typed scripting
Node.js: Runtime environment
Jest / Playwright Test Runner: Test execution and reporting
Page Object Model (POM): Clean and maintainable test design
Data-Driven Testing: Test input is driven  externally from JSON file


Project Structure

playwright-hotel-booking/
- tests/                   # Test scripts
   - booking.spec.ts
- pages/                   # Page Objects
    - HomePage.ts
    - ReservationPage.ts
    - BookingFormPage.ts
- data/                    # Test data file
  - bookingData.json
- playwright.config.ts     # Playwright configuration
- package.json             # Node.js dependencies
- README.md


Prerequisites
- Node.js >= 18
- npm or yarn
- Git

Installation

1. Clone the repository:
   git clone https://github.com/praam/playwright-hotel-booking.git
2. Navigate to the project folder:
   cd playwright-hotel-booking
3. Install dependencies:
   npm install
4. Install Playwright browsers:
   npx playwright install

Running Tests
npx playwright test --headed to


Testdata
Test data is stored in /data/bookingData.json.

Example structure:
{
  "firstname": "Pramod",
  "lastname": "Ramu",
  "email": "pramodramu67@gmail.com",
  "phone": "894906451977",
  "checkin": "2025-09-04",
  "checkout": "2025-09-05"
}


Notes

Used Page Object Model (POM) for better maintainability
Used explicit waits and scrolling to handle dynamic elements
Optimized selectors for faster execution


Author

Pramod Ramu
Email: pramodramu95@gmail.com
GitHub: https://github.com/praam





