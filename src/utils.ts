import { Result } from "antd";

export const getTestResult = (values: number[]): string => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i] === 1) {
      count1++;
    } else if (values[i] === 2) {
      count2++;
    } else {
      count3++;
    }
  }

  let maxCount = Math.max(count1, count2, count3);
  if (maxCount == count1) {
    return `Кабачок`;
  } else if (maxCount == count2) {
    return `Баклажан`;
  } else {
    return `Тыковка`;
  }
};
