describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('doit être titré "Google"', async () => {
    await jestPuppeteer.debug() //step by step by pressing Enter
    await expect(page.title()).resolves.toMatch('Google');
  });
});