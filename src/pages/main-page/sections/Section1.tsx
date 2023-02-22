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
    <div className="section-1-main relative p-[20px] h-[100vh] flex items-center justify-center">
      {/* <img
        src={BackGroundImage}
        alt="wedding bg"
        className="sec-1-bg-img absolute top-0 h-full w-full"
      /> */}
      <div className="bg-wd_coffee bg-opacity-60 z-20 px-[30px] py-[50px] w-[600px] rounded flex flex-col justify-center items-center">
        <div className="wed-text pb-[10px] text-center text-white">
          <div>
            <p className="wed-title wed-1 text-[80px] leading-[4rem]">
              <span className="text-wd_mikado_yellow">Jimel</span>{" "}
              <span className="ml-3 mr-3">And</span>
              <span className="text-wd_mikado_yellow">Sheila</span>
            </p>
            <p className="wed-title wed-1 text-[60px]">Wedding </p>
          </div>
          <div className="tracking-[2.5px] mt-10 mb-4">
            <p className="text-[14.5px] font-bold mb-2">
              PLEASE JOIN US AS WE CELEBRATE OUR WEDDING!
            </p>
          </div>
          <Button
            label="YOU ARE INVITED!"
            btnFunction={handleClick}
            // bgColor="#6B3E2E"
            txtColor="#7F5946"
          />
          <div className="tracking-[2.5px] leading-3 mt-10 mb-4">
            <p className="text-[13px] font-bold mb-2">
              MARCH 18, 2023 | SATURDAY
            </p>
            <p className="text-[11px]">AT 3:00 IN THE AFTERNOON</p>
          </div>
          <div className="tracking-[2.5px] leading-3 mt-5">
            <p className="text-[13px] font-bold mb-2">
              PRISCILLA CRYSTAL PALACE
            </p>
            <p className="text-[11px]">KAWIT, CAVITE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
