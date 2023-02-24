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
      <div className="bg-[#E1726E] bg-opacity-20 z-20 px-[30px] py-[50px] w-[750px] rounded flex flex-col justify-center items-center">
        <div className="wed-text pb-[10px] text-center text-wd_coffee">
          <div>
            <p className="wed-title wed-1 text-[80px] leading-[4rem] mt-5 tracking-[1px]">
              <span className="text-wd_mikado_yellow font-semibold drop-shadow-xl">
                Jimel
              </span>{" "}
              <span className="ml-4 mr-6 text-wd_mikado_yellow font-semibold drop-shadow-lg">
                &
              </span>
              <span className="text-wd_mikado_yellow font-semibold drop-shadow-xl">
                Sheila
              </span>
            </p>
            <p className="wed-title wed-1 text-[60px] font-semibold tracking-[2px] drop-shadow-lg">
              Wedding{" "}
            </p>
          </div>
          <div className="tracking-[2.5px] mt-12 mb-4">
            {/* <p className="text-[14.5px] font-bold mb-2">
              PLEASE JOIN US AS WE CELEBRATE OUR WEDDING!
            </p> */}
          </div>
          <Button
            label="YOU ARE INVITED!"
            btnFunction={handleClick}
            // bgColor="#6B3E2E"
            txtColor="white"
            fontWeight="bold"
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
