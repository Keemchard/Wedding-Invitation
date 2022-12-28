import React, { FC } from "react";
import { Timeline } from "../../../../types/types";
import Event from "./Event";

interface Prop {
  timeline: Timeline[];
}
const TimeLine: FC<Prop> = ({ timeline }) => {
  return (
    <>
      <div className="bg-[tertiary] max-w-[600px] relative">
        <div className="line bg-black h-[100%] w-[2px] absolute left-0 right-0 ml-auto mr-auto z-10"></div>
        {timeline.map((item) => {
          return (
            <div key={item.id}>
              <Event timeline={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TimeLine;
