import {
  faBed,
  faBeer,
  faMicrophone,
  faPlateWheat,
  faRing,
  faStar,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineSection = () => {
  return (
    <>
      <div className="p-1 bg-[gray] w-[90%] m-auto">
        <VerticalTimeline>
          <VerticalTimelineElement
            className=""
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faRing} className="text-[100px]" />}
          >
            <p className="">Ceremony</p>
            <p>3:00 PM</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBeer} />}
          >
            <p className="">Cocktails & Photos</p>
            <p>5:00 PM</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faMicrophone} />}
          >
            <p className="">Reception Proper </p>
            <p>6:00 PM</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faPlateWheat} />}
          >
            <p className="">Dinner </p>
            <p>7:00 PM</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faWandSparkles} />}
          >
            <p className="">Sparklers & Fireworks</p>
            <p>8:00 PM</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBed} />}
          />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default TimelineSection;
