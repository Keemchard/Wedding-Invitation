import React from "react";
import timelineData from "../../../data/timeline";

import TimeLine from "./components/TimeLine";

const Section3 = () => {
  const timeline = timelineData;
  return (
    <div className="bg-[brown] my-[20px] rounded flex flex-col justify-center items-center">
      <div className="text-[1.5rem] border-[1px] border-[#6B3E2E] rounded py-[10px] px-[1rem] my-[20px]">
        Date and Time
      </div>
      <div className="bg-[salmon]">
        <TimeLine timeline={timeline} />
      </div>
    </div>
  );
};

export default Section3;
