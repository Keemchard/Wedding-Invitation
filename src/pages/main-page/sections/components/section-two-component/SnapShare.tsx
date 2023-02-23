import React from "react";
import camera from "../../../../../assets/sec-2-assets/camera.png";

const SnapShare = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      <p className="head-text text-[1.5rem] border-b-4 border-b-wd_mikado_yellow rounded px-[1rem] font-bold mb-6">
        Snap & Share
      </p>
      <p className="text-[20px]  text-wd_coffee">
        Help us capture the love! Use our official wedding hashtag:
      </p>
      <p className="text-[22px] mt-6 text-wd_coffee font-bold hover:text-wd_mikado_yellow transition-[0.25s] z-20">
        #SHEILAparinniJIMELsahuli
      </p>
      <img
        className="absolute w-28 bottom-[-13px] left-[-10px] rotate-[-35deg] opacity-40"
        src={camera}
        alt={camera}
      />
    </div>
  );
};

export default SnapShare;
