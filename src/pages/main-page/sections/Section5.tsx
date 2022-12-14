import React from "react";
import Button from "../../../components/Button";
import GuestForm from "./components/GuestForm";

const Section5 = () => {
  const decline = () => {
    alert("Okay thanks");
  };
  const accept = () => {
    alert("thank you for accepting");
  };

  return (
    <div className="bg-primary flex justify-center items-center p-[10px]">
      <div className="bg-[salmon] p-[20px] border-[1px] border-[yellow] border-solid">
        <div>
          <p className="text-[2rem] bg-[white]">Will You Attend This Event?</p>
        </div>
        <div className="bg-[aqua] flex justify-center gap-10 my-[2.5rem]">
          <Button label="Decline" btnFunction={decline} />
          <Button label="Accept" btnFunction={accept} />
        </div>
        <div className="bg-[aqua]">
          <GuestForm />
        </div>
      </div>
    </div>
  );
};

export default Section5;
