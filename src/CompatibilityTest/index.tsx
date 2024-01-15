import React, { CSSProperties, FC, useState } from "react";
import { Question, QuestionData } from "../components/Question";
import { Button, Space, theme } from "antd";
import { getTestResult } from "./utils";
import { ClearOutlined } from "@ant-design/icons";
import { test } from "./data";

const { useToken } = theme;

export const CompatibilityTestPage: FC = () => {
  const [boyAnswers, setBoyAnswers] = useState<Record<number, number>>();
  const [girlAnswers, setGirlAnswers] = useState<Record<number, number>>();

  const readyForGetResults =
    Object.keys(boyAnswers ?? {}).length === test.length && Object.keys(girlAnswers ?? {}).length === test.length;

  const style = useStyle();

  const [result, setResult] = useState<string>();

  const clear = () => {
    setBoyAnswers(undefined);
    setGirlAnswers(undefined);
  };

  const generate = () => {
    const boy = {};
    const girl = {};
    test.forEach((question, index) => {
      boy[index] = getRandomInt(question.variants.length);
      girl[index] = getRandomInt(question.variants.length);
    });
    setBoyAnswers(boy);
    setGirlAnswers(girl);
  };

  return (
    <Space style={style.main} align="start">
      <Space direction="vertical">
        <Space>
          <Button onClick={() => clear()} icon={<ClearOutlined />}>
            Очистить
          </Button>
          <Button onClick={() => generate()} type="primary">
            Сгенерировать ответы
          </Button>
        </Space>
        <Space>
          <div style={{ ...style.block, ...style.boy }}>
            <div style={style.title}>Парень</div>
            {test.map((question, index) => (
              <Question
                key={index}
                onChange={(value) => setBoyAnswers({ ...boyAnswers, [index]: value })}
                value={boyAnswers?.[index]}
                text={question.text}
                variants={question.variants}
              />
            ))}
          </div>
          <div style={{ ...style.block, ...style.girl }}>
            <div style={style.title}>Девушка</div>
            {test.map((question, index) => (
              <Question
                key={index}
                onChange={(value) => setGirlAnswers({ ...girlAnswers, [index]: value })}
                value={girlAnswers?.[index]}
                text={question.text}
                variants={question.variants}
              />
            ))}
          </div>
        </Space>
      </Space>
      <Space direction="vertical" style={style.resultBlock}>
        {!result && (
          <Button
            type="primary"
            style={style.resultButton}
            disabled={!readyForGetResults}
            onClick={() =>
              setResult(
                getTestResult(
                  Object.keys(boyAnswers ?? {}).map((key) => boyAnswers?.[+key] ?? 0),
                  Object.keys(girlAnswers ?? {}).map((key) => girlAnswers?.[+key] ?? 0),
                ),
              )
            }
          >
            Узнать совместимость
          </Button>
        )}
        {!readyForGetResults && <div style={style.secondaryText}>Сперва ответьте на все вопросы</div>}
        {result && <div style={style.resultText}>{result}</div>}
        {result && (
          <Button
            onClick={() => {
              setResult(undefined);
              clear();
            }}
          >
            Пройти тест заново
          </Button>
        )}
      </Space>
    </Space>
  );
};

const useStyle = () => {
  const { token } = useToken();

  const style: Record<string, CSSProperties> = {
    main: {
      margin: token.marginMD,
    },
    block: {
      padding: token.paddingMD,
      borderRadius: 10,
    },
    title: {
      fontSize: token.fontSizeHeading4,
      fontWeight: "bold",
    },
    boy: {
      border: `3px solid #83b0de`,
      color: "#83b0de",
    },
    girl: {
      border: `3px solid #de83be`,
      color: "#de83be",
    },
    resultButton: {
      width: "min-content",
    },
    resultBlock: {
      marginLeft: token.marginLG,
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

function getRandomInt(max: number): number {
  const result = Math.floor(Math.random() * max);
  return result === 0 ? result + 1 : result;
}
