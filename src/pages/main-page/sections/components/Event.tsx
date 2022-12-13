import React, { FC } from "react";
import { Timeline } from "../../../../types/types";

interface EventProp {
  timeline: Timeline;
}
const Event: FC<EventProp> = ({ timeline }) => {
  const { time, title, description, box_position } = timeline;
  return (
    <>
      <div
        className="bg-[gray] m-[10px] mb-[20px] flex"
        style={{ justifyContent: box_position }}
      >
        <div className="timeline-con w-[50%] px-[2.5rem] relative">
          <div className="hover:scale-[1.1] transition-[0.25s]">
            <p>{time}</p>
            <p className="text-[20px] font-bold">{title}</p>
            <p>{description}</p>
            <p>{box_position}</p>
          </div>
          <div
            className="timeline-circle bg-[blue] absolute h-[1.5rem] w-[1.5rem] rounded-[50%] flex justify-center top-0 z-20"
            style={
              box_position === "left"
                ? { right: "-0.75rem" }
                : { left: "-0.75rem" }
            }
          >
            <p className="text-[15px]">💍</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Event;
