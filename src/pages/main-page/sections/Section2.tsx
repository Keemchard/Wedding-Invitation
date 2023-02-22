import CoupleImage from "../../../assets/mock/sec-2-mock.jpg";
import Attire from "./components/section-two-component/Attire";
import GiftGuide from "./components/section-two-component/GiftGuide";
import SnapShare from "./components/section-two-component/SnapShare";

const Section2 = () => {
  return (
    <div>
      <div className="sec-2 flex bg-wd_coffee my-16">
        <div className="couple-img-con">
          <img
            src={CoupleImage}
            alt="couple img"
            className="couple-img w-[40rem]"
          />
        </div>
        <div className="m-[10px] text-white">
          <p className="head-text font-bold text-[1.5rem] border-b-2 border-b-wd_mikado_yellow mb-[1rem]">
            Description
          </p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          repudiandae sunt natus obcaecati suscipit tenetur cum libero nemo unde
          expedita. Lorem ipsum dolor sit amet.lorem30
        </div>
      </div>
      <div className="hover:scale-[1.1] transition-[0.25s] sec-2-sub flex justify-center items-center my-28 w-[500px] m-auto">
        <Attire />
      </div>
      <div className="hover:scale-[1.1] transition-[0.25s] sec-2-sub flex justify-center items-center my-28 w-[500px] m-auto">
        <GiftGuide />
      </div>
      <div className="hover:scale-[1.1] transition-[0.25s] sec-2-sub flex justify-center items-center my-28 w-[500px] m-auto">
        <SnapShare />
      </div>
    </div>
  );
};

export default Section2;
