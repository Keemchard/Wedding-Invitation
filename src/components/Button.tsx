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
  icon,
  fontWeight,
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: txtColor,
        borderRadius: btnRadius,
        width: width,
        height: height,
        fontWeight: fontWeight,
      }}
      className="bg-wd_mikado_yellow text-black relative py-[17px] px-[35px] rounded hover:scale-[1.1] transition-[0.25s] tracking-[0.5px]"
      onClick={btnFunction}
    >
      <i className={`${icon} icon-class`}></i>
      {label}
    </button>
  );
};

export default Button;
