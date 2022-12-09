import React from "react";
import Button from "../../../components/Button";

const goToSecFive = () => {
  alert("hey");
};

const Section1 = () => {
  return (
    <div className="bg-[purple] p-[20px] h-[500px] flex items-center justify-center">
      <div className="bg-[aqua] p-[30px] w-[600px] h-[300px] rounded flex flex-col justify-center items-center">
        <div className="pb-[30px] text-center">
          <p className="text-[40px]">MR. & MRS. SURNAME</p>
          <p className="text-[35px]">WEDDING</p>
        </div>
        <Button
          label="YOU ARE INVITED!"
          btnFunction={goToSecFive}
          bgColor="red"
        />
      </div>
    </div>
  );
};

export default Section1;
