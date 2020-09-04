/**
 * wait
 * @param ms
 * @example async () => {
  await wait(2000);
}
 */
export const wait = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
