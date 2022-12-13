import React, { FC } from "react";
import { Timeline } from "../../../../types/types";

interface EventProp {
  timeline: Timeline;
}
const Event: FC<EventProp> = ({ timeline }) => {
  const { time, title, description, box_position } = timeline;
  return (
    <>
      <div className="bg-[gray] m-[10px] p-[10px]">
        <p className="text-[20px] font-bold">{title}</p>
      </div>
    </>
  );
};
export default Event;
