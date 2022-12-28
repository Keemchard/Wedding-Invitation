import React from "react";
import Button from "../../../components/Button";
import BackGroundImage from "../../../assets/mock/sec-1-mock-bg.jpg";

const goToSecFive = () => {
  alert("hey");
};

const Section1 = () => {
  return (
    <div className="relative p-[20px] h-[500px] flex items-center justify-center">
      <img
        src={BackGroundImage}
        alt="wedding bg"
        className="absolute top-0 h-full w-full"
      />
      <div className="bg-wd_coffee bg-opacity-60 z-20 p-[30px] w-[600px] h-[300px] rounded flex flex-col justify-center items-center">
        <div className="pb-[30px] text-center">
          <p className="text-[40px]">MR. & MRS. SURNAME</p>
          <p className="text-[35px]">WEDDING</p>
        </div>
        <Button
          label="YOU ARE INVITED!"
          btnFunction={goToSecFive}
          // bgColor="#6B3E2E"
          // txtColor="white"
        />
      </div>
    </div>
  );
};

export default Section1;
