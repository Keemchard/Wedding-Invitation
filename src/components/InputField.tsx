import React, { FC, InputHTMLAttributes } from "react";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  inputBorder: string;
  inputTextColor: string;
  inputBgColor: string;
  inputWidth: string;
  inputWeight: string;
  inputFont: string;
}

const InputField: FC<Partial<InputType>> = ({
  inputBorder = "1px solid black",
  inputTextColor = "black",
  inputBgColor = "white",
  inputWidth,
  inputWeight,
  inputFont,
  ...props // property of InputHTMLAttributes<HTMLInputElement> type
}) => {
  return (
    <input
      style={{
        border: inputBorder,
        color: inputTextColor,
        backgroundColor: inputBgColor,
        width: inputWidth,
        fontWeight: inputWeight,
      }}
      className="p-[1rem] rounded"
      placeholder="change this"
      {...props}
    />
  );
};

export default InputField;
