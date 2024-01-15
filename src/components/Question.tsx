import { Radio, Space, theme } from "antd";
import React, { CSSProperties, FC } from "react";

const { useToken } = theme;

export interface QuestionData {
  text: string;
  variants: string[];
}

interface QuestionProps extends QuestionData {
  onChange: (value: number) => void;
  value?: number;
}

export const Question: FC<QuestionProps> = ({ text, onChange, value, variants }) => {
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
    quiestion: {
      paddingTop: token.paddingMD,
      paddingBottom: token.paddingMD,
    },
    questionText: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: token.marginMD,
    },
  };

  return style;
};
