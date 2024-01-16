export const getTestResult = (boyAnswers: number[], girlAnswers: number[]): string => {
  let count1 = 0;

  boyAnswers.forEach((boyAnswer, index) => {
    if (boyAnswer === girlAnswers[index]) {
      count1++;
    }
  });

  let percent = (count1 / boyAnswers.length) * 100;
  console.log(count1);
  return "Вы подходите друг другу на ${percent}%";
};
