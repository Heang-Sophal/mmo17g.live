const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport to a typical desktop size
  await page.setViewport({ width: 1280, height: 800 });

  // Navigate to login page
  console.log('Navigating to login page...');
  await page.goto('http://localhost:8000/login', { waitUntil: 'networkidle2' });

  // Fill in login credentials
  console.log('Filling in credentials...');
  await page.type('input[type="email"], input[name="email"], #email', 'sophal.heang@gmail.com');
  await page.type('input[type="password"], input[name="password"], #password', 'Test@12345');

  // Click login button
  console.log('Clicking login...');
  await Promise.all([
    page.click('button[type="submit"], .btn-primary'),
    page.waitForNavigation({ waitUntil: 'networkidle2' })
  ]);

  // Wait a bit more for dashboard charts to load
  console.log('Waiting for dashboard to fully render...');
  await new Promise(r => setTimeout(r, 5000)); // 5 seconds

  // Take screenshot
  console.log('Taking screenshot...');
  await page.screenshot({ path: 'webapp_dashboard.png', fullPage: true });

  await browser.close();
  console.log('Done!');
})();