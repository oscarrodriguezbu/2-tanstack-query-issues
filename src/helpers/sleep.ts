export const sleep = (milliseconds: number) => {//relentizar el codigo intencionalmente
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, milliseconds);
  });
};
