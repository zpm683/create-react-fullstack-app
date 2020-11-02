import faker from "faker";
import puppeteer from "puppeteer";

//create global variables to be used in the beforeAll function
let browser: any;
let page: any;

beforeAll(async () => {
  // launch browser
  browser = await puppeteer.launch({
    headless: false, // headless mode set to false so browser opens up with visual feedback
    slowMo: 250, // how slow actions should be
  });
  // creates a new page in the opened browser
  page = await browser.newPage();
  page.emulate({
    viewport: {
      width: 924,
      height: 1009,
    },
    userAgent: "",
  });
});

describe("Login", () => {
  test("users can login", async () => {
    // await page.goto(routes.public.login);
    await page.goto("http://localhost:3000");
    await page.waitForSelector("[data-testid='loginPage']");

    await page.click("#test-for-username");
    await page.type("#test-for-username", faker.random.word());
    await page.click("#test-for-password");
    await page.type("#test-for-password", faker.random.word());
    await page.click("#test-for-login");
    await page.screenshot({
      path: "src/e2e/screenshot/login.png",
      fullPage: true,
    });
    await page.waitForSelector('[data-testid="homepage"]');
  }, 1000000);
});

describe("Logout", () => {
  test("users can logout", async () => {
    await page.waitForSelector('[data-testid="homepage"]');

    await page.click('[data-testid="signoutBtn"]');
    await page.screenshot({
      path: "src/e2e/screenshot/logout.png",
      fullPage: true,
    });
    await page.waitForSelector("[data-testid='loginPage']");
  }, 9000000);
});

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close();
});
