import React from "react";
import Button from "../../../components/Button";

const Section4 = () => {
  const goToLivestream = () => {
    alert("this is the livestream");
  };
  return (
    <div className="sec-4-con bg-tertiary p-[1rem] flex justify-center my-[5rem]">
      <div className="bg-wd_coffee p-[1rem] flex gap-3">
        <div className="text-white">
          <p className="font-bold">Join our Livestream</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="min-w-[140px] text-right">
          <Button
            label="Join Now"
            btnFunction={goToLivestream}
            // bgColor="#CCB494"
            // txtColor="black"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
