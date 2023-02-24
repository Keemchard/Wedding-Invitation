import React from "react";
import attire from "../../../../../assets/sec-2-assets/attire.png";

const Attire = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      <p className="head-text text-[1.5rem] border-b-4 border-b-wd_mikado_yellow rounded px-[1rem] font-bold mb-6">
        Attire
      </p>
      <p className="text-[20px]  text-wd_coffee">
        We request everyone to arrive in
      </p>
      <p className="text-[20px]  text-wd_coffee">FORMAL or SEMI-FORMAL wear</p>
      <img
        className="absolute w-36 top-[-45px] left-[-55px] rotate-[5deg] opacity-20"
        src={attire}
        alt={attire}
      />
    </div>
  );
};

export default Attire;
