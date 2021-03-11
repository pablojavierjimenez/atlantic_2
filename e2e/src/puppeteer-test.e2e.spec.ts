import 'expect-puppeteer';

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  });

  it("Puppeteer screenshot - from APP", async () => {
    await page.screenshot({ path: "e2e/screenshot/index-home-screenshot.png" });
  });
});
