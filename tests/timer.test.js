import {sleep} from "../src/timer";

describe('Timer', () => {

  it('should wait 3 seconds', async () => {
    const t = Date.now();
    await sleep(3)
    expect(Date.now() - t).toBeGreaterThanOrEqual(3)
  }, 10000)


  // the next 2 tests are executed in parallel
  it.concurrent('should wait 3 seconds', async () => {
    const t = Date.now();
    await sleep(3)
    expect(Date.now() - t).toBeGreaterThanOrEqual(3)
  }, 10000)

  it.concurrent('should wait 2 seconds', async () => {
    const t = Date.now();
    await sleep(2)
    expect(Date.now() - t).toBeGreaterThanOrEqual(3)
  }, 10000)

  // Only execute this test
  // it.only('should work', () => {
  //   const a = 2+2
  //   expect(a).toBe(4)
  // });

  // don't execute this test
  it.skip('should work', () => {
    const a = 2+2
    expect(a).toBe(4)
  });

});