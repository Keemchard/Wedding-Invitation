import React, { useState } from "react";
import Button from "../../../components/Button";
import DeclineModal from "./components/DeclineModal";
import GuestForm from "./components/GuestForm";

const Section5 = () => {
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);

  const decline = () => {
    setDeclined(true);
    setAccepted(false);
    //TODO: make much better time out for this
    // setTimeout(() => {
    //   setDeclined(false);
    // }, 3000);
  };
  const accept = () => {
    setAccepted(true);
    setDeclined(false);
  };

  return (
    <div className="bg-primary flex justify-center items-center p-[10px]">
      <div className="bg-[#salmon] p-[20px]">
        <div>
          <p className="text-[2rem] text-center">Will You Attend This Event?</p>
        </div>
        <div className="bg-[aqua] flex justify-center gap-10 my-[2.5rem]">
          <Button
            label="Decline"
            btnFunction={decline}
            bgColor="#6B3E2E"
            txtColor="white"
          />
          <Button
            label="Accept"
            btnFunction={accept}
            bgColor="#6B3E2E"
            txtColor="white"
          />
        </div>
        {accepted && (
          <div className="bg-[aqua]">
            <GuestForm />
          </div>
        )}
        {declined && <DeclineModal message="OKS, Thank you for visiting" />}
      </div>
    </div>
  );
};

export default Section5;
