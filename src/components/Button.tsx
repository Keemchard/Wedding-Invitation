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
      className="bg-wd_mikado_yellow text-black relative py-[17px] px-[35px] rounded hover:scale-[1.1] transition-[0.25s]"
      onClick={btnFunction}
    >
      {/* <i className={`${icon} icon-class font-bold text-[25px]`}></i> */}
      {label}
    </button>
  );
};

export default Button;
