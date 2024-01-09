export const getTestResult = (values: number[]): string => {
  let namRespons1 = 0;
  let namRespons2 = 0;
  let namRespons3 = 0;

  values.forEach((elem) => {
    if (elem === 1) {
      namRespons1++;
    } else if (elem === 2) {
      namRespons2++;
    } else if (elem === 3) {
      namRespons3++;
    }
  });

  let maxNamRespons = Math.max(namRespons1, namRespons2, namRespons3);
  if (maxNamRespons == namRespons1) {
    return `Кабачок`;
  } else if (maxNamRespons == namRespons2) {
    return `Баклажан`;
  } else if (maxNamRespons == namRespons3) {
    return `Тыковка`;
  }
};
