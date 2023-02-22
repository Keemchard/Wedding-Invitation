import React from "react";
import { timelineData } from "../../../data/timeline";

import TimeLine from "./components/TimeLine";

const Section3 = () => {
  const timeline = timelineData;
  return (
    <div className="my-[20px] rounded flex flex-col justify-center items-center">
      <div className="head-text flex gap-4 text-[1.5rem] border-b-4 border-b-wd_mikado_yellow rounded pt-[10px] px-[1rem] my-[2rem] font-bold">
        <p>WEDDING</p>
        <p>TIMELINE</p>
      </div>
      <div className="">
        <TimeLine timeline={timeline} />
      </div>
    </div>
  );
};

export default Section3;
