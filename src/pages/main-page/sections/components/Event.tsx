import { FC } from "react";
import { Timeline } from "../../../../types/types";

interface EventProp {
  timeline: Timeline;
}
const Event: FC<EventProp> = ({ timeline }) => {
  const { time, title, description, box_position, image } = timeline;
  return (
    <>
      <div
        className="sec-3-event bg-transparent m-[10px] flex"
        style={{ justifyContent: box_position }}
      >
        <div className="timeline-con w-[50%] px-[1rem] relative ">
          <div
            style={{
              margin:
                box_position === "right" ? "0 0 0 2.5rem" : "0 2.5rem 0 0",
            }}
            className="hover:scale-[1.1] transition-[0.25s] text-wd_coffee"
          >
            <p className="font-bold">{time}</p>
            <p className="text-[20px] font-bold text-wd_coffee border-l-4 border-wd_mikado_yellow pl-[0.5rem] ">
              {title}
            </p>
            <p className="select-none text-[transparent]">{description}</p>
            {/* <p>{box_position}</p> */}
          </div>
          <div
            className="timeline-circle bg-white absolute h-[3rem] w-[3rem] rounded-[50%] flex justify-center top-0 z-20"
            style={
              box_position === "left"
                ? { right: "-1.50rem" }
                : { left: "-1.50rem" }
            }
          >
            {image ? (
              <img className="" src={image} alt={image} />
            ) : (
              <p className="text-[15px]">💍</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Event;
