import React, { CSSProperties, FC, useState } from "react";
import { Question } from "../components/Question";
import { Button, theme } from "antd";
import { getTestResult } from "./utils";
import { test } from "./data";

const { useToken } = theme;

export const PersonalityTestPage: FC = () => {
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
};

const useStyle = () => {
  const { token } = useToken();

  const style: Record<string, CSSProperties> = {
    main: {
      padding: token.paddingMD,
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
