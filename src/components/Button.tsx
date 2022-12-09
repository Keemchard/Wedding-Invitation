import React, { FC } from "react";
import { ButtonType } from "../types/types";

const Button: FC<ButtonType> = ({ label, btnFunction, bgColor = "gray" }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="py-[15px] px-[35px] rounded"
      onClick={btnFunction}
    >
      {label}
    </button>
  );
};

export default Button;
