import React, { FC } from "react";
import { ButtonType } from "../types/types";

const Button: FC<ButtonType> = ({
  label,
  btnFunction,
  bgColor = "gray",
  txtColor = "black",
}) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: txtColor }}
      className="py-[15px] px-[35px] rounded hover:scale-[1.1] transition-[0.25s]"
      onClick={btnFunction}
    >
      {label}
    </button>
  );
};

export default Button;
