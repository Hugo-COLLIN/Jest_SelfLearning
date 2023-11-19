import {sleep} from "../src/timer";


it('should wait  seconds', async () => {
  const t = Date.now();
  await sleep(2)
  expect(Date.now() - t).toBeGreaterThanOrEqual(3)
}, 10000)