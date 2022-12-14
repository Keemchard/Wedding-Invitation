import React, { FC, InputHTMLAttributes } from "react";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  inputBorder: string;
  inputTextColor: string;
  inputBgColor: string;
}

const InputField: FC<Partial<InputType>> = ({
  inputBorder = "1px solid purple",
  inputTextColor = "black",
  inputBgColor = "white",
  ...props // property of InputHTMLAttributes<HTMLInputElement> type
}) => {
  return (
    <input
      style={{
        border: inputBorder,
        color: inputTextColor,
        backgroundColor: inputBgColor,
      }}
      className="p-[1rem]"
      placeholder="change this"
      {...props}
    />
  );
};

export default InputField;
