import React from "react";
import gift from "../../../../../assets/sec-2-assets/gift.png";

const GiftGuide = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      <p className="head-text text-[1.5rem] border-b-4 border-b-wd_mikado_yellow rounded px-[1rem] font-bold mb-6">
        Gift Guide
      </p>
      <p className="text-[20px]  text-wd_coffee">
        Your presence is present enough in this happiest moment of our lives.
        But if we are honored with a gift, a monetary gift will be much
        appreciated to help us jumpstart our married life.
      </p>
      <img
        className="absolute w-32 top-[0px] right-[0px] opacity-20"
        src={gift}
        alt={gift}
      />
    </div>
  );
};

export default GiftGuide;
