export interface QuestionData {
  text: string;
  variants: [string, string, string];
}

export const test: QuestionData[] = [
  {
    text: "Что бы Вы предпочли?",
    variants: [
      "Сидеть дома и играть в компьютерные игры",
      "Погулять на свежем воздухе с друзьями",
      "Заняться полезным для себя делом",
    ],
  },
  {
    text: "Куда бы вы потратили подаренные деньги?",
    variants: ["Растратил бы все в ближайшее время на развлечения и удовольствия", "Отложил бы на потом", "Инвестиции"],
  },
  {
    text: "Какой жанр фильмов вы предпочитаете?",
    variants: ["Дорамы", "Аниме", "Другие"],
  },
  {
    text: "Какую музыку вы слушаете?",
    variants: ["MiyaGi", "Рок", "Другое"],
  },
  {
    text: "Какую пиццу Вы бы заказали?",
    variants: ["С бананами", "Пеперони", "С ананасами"],
  },
  {
    text: "Как Вы заводите новые знакомства?",
    variants: [
      "Общаюсь с человеком, будто знаю его всю жизнь",
      "Стараюсь постепенно сблизиться, наладить контакт",
      "Я не люблю новые знакомства",
    ],
  },
];
