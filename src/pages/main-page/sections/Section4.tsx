import React from "react";
import Button from "../../../components/Button";

const Section4 = () => {
  const goToLivestream = () => {
    alert("this is the livestream");
  };
  return (
    <div className="bg-tertiary p-[1rem] flex justify-center my-[5rem]">
      <div className="bg-[#795644] p-[1rem] flex gap-3">
        <div className="text-white">
          <p className="font-bold">Join our Livestream</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <Button
          label="Join Now"
          btnFunction={goToLivestream}
          bgColor="#CCB494"
          txtColor="black"
        />
      </div>
    </div>
  );
};

export default Section4;
