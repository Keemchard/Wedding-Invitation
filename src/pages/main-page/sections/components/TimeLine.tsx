import React, { FC } from "react";
import { Timeline } from "../../../../types/types";
import Event from "./Event";

interface Prop {
  timeline: Timeline[];
}
const TimeLine: FC<Prop> = ({ timeline }) => {
  return (
    <>
      <div className="bg-[tertiary] w-[600px] p-[10px]">
        {timeline.map((item) => {
          return <Event timeline={item} />;
        })}
      </div>
    </>
  );
};

export default TimeLine;
