export const getTestResult = (values: number[]): string => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  values.forEach((elem) => {
    if (elem === 1) {
      count1++;
    } else if (elem === 2) {
      count2++;
    } else if (elem === 3) {
      count3++;
    }
  });

  let maxCount = Math.max(count1, count2, count3);
  if (maxCount == count1) {
    return `Кабачок`;
  } else if (maxCount == count2) {
    return `Баклажан`;
  } else if (maxCount == count3) {
    return `Тыковка`;
  }
};
