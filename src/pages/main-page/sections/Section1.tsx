import React, { FC } from "react";
import Button from "../../../components/Button";
import BackGroundImage from "../../../assets/mock/sec-1-mock-bg.jpg";

const goToSecFive = () => {
  alert("hey");
};

interface Prop {
  handleClick: () => void;
}

const Section1: FC<Prop> = ({ handleClick }) => {
  return (
    <div className="section-1-main relative p-[20px] h-[550px] flex items-center justify-center">
      {/* <img
        src={BackGroundImage}
        alt="wedding bg"
        className="sec-1-bg-img absolute top-0 h-full w-full"
      /> */}
      <div className="bg-wd_coffee bg-opacity-60 z-20 p-[30px] w-[600px] h-[300px] rounded flex flex-col justify-center items-center">
        <div className="wed-text pb-[30px] text-center text-white">
          <p className="wed-title wed-1 text-[80px] leading-[4rem]">
            <span className="text-wd_mikado_yellow">She</span>ila{" "}
            <span className="ml-3 mr-3">And</span> Ji
            <span className="text-wd_mikado_yellow">mel</span>
          </p>
          <p className="wed-title wed-2 text-[50px]">Wedding Invitation</p>
        </div>
        <Button
          label="YOU ARE INVITED!"
          btnFunction={handleClick}
          // bgColor="#6B3E2E"
          // txtColor="white"
        />
      </div>
    </div>
  );
};

export default Section1;
