import React, { FC } from "react";
import { ButtonType } from "../types/types";

const Button: FC<ButtonType> = ({
  label,
  btnFunction,
  bgColor,
  txtColor,
  btnRadius,
  width,
  height,
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: txtColor,
        borderRadius: btnRadius,
        width: width,
        height: height,
      }}
      className="bg-wd_mikado_yellow text-black py-[15px] px-[35px] rounded hover:scale-[1.1] transition-[0.25s]"
      onClick={btnFunction}
    >
      {label}
    </button>
  );
};

export default Button;
