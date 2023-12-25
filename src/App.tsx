import "./App.css";
import { Button, Radio, Space, theme } from "antd";
import { CSSProperties, FC, useState } from "react";
import { getTestResult, testFunc } from "./utils";
import React from "react";

const { useToken } = theme;

function App() {
  const [state, setState] = useState<Record<number, number>>();

  const readyForGetResults = Object.keys(state ?? {}).length === test.length;

  const { main, secondaryText, resultText } = useStyle();

  const [result, setResult] = useState<string>();

  return (
    <div style={main}>
      {test.map((question, index) => (
        <Question
          key={index}
          onChange={(value) => setState({ ...state, [index]: value })}
          value={state?.[index]}
          text={question.text}
          variants={question.variants}
        />
      ))}
      {!result && (
        <Button
          type="primary"
          disabled={!readyForGetResults}
          onClick={() => setResult(getTestResult(Object.keys(state ?? {}).map((key) => state?.[+key] ?? 0)))}
        >
          Какой я овощ?
        </Button>
      )}
      {!readyForGetResults && <div style={secondaryText}>Сперва ответьте на все вопросы</div>}
      {result && <div style={resultText}>{`Ты - ${result}!`}</div>}
      {result && (
        <Button
          onClick={() => {
            setResult(undefined);
            setState(undefined);
          }}
        >
          Прройти тест заново
        </Button>
      )}
    </div>
  );
}

export default App;

interface QuestionProps extends QuestionData {
  onChange: (value: number) => void;
  value?: number;
}

const Question: FC<QuestionProps> = ({ text, onChange, value, variants }) => {
  const { quiestion, questionText } = useStyle();

  return (
    <div style={quiestion}>
      <div style={questionText}>{text}</div>
      <Radio.Group onChange={(e) => onChange(e.target.value)} value={value}>
        <Space direction="vertical">
          {variants.map((variantText, index) => (
            <Radio value={index + 1}>{`${index + 1}) ${variantText}`}</Radio>
          ))}
        </Space>
      </Radio.Group>
    </div>
  );
};

const useStyle = () => {
  const { token } = useToken();

  const style: Record<string, CSSProperties> = {
    main: {
      padding: token.paddingMD,
    },
    quiestion: {
      paddingTop: token.paddingMD,
      paddingBottom: token.paddingMD,
    },
    questionText: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: token.marginMD,
    },
    resultText: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: token.marginMD,
      marginTop: token.marginMD,

      color: token.colorPrimary,
    },
    secondaryText: { color: token.colorTextSecondary, marginTop: token.marginMD },
  };

  return style;
};

interface QuestionData {
  text: string;
  variants: [string, string, string];
}

const test: QuestionData[] = [
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
