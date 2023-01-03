import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import { decline_toast } from "../../../utils/toast";

// import DeclineModal from "./components/DeclineModal";
import GuestForm from "./components/GuestForm";

const Section5 = () => {
  const [accepted, setAccepted] = useState(false);
  // const [declined, setDeclined] = useState(false);

  const decline = () => {
    // setDeclined(true);
    setAccepted(false);
    decline_toast();
  };
  const accept = () => {
    setAccepted(true);
    toast.dismiss();
    // setDeclined(false);
  };

  return (
    <div className="guest-form-main-con flex justify-center items-center p-[10px]">
      <div className="guest-form-con p-[20px]">
        <div>
          <p className="text-[2rem] font-bold text-center">
            Will You Attend This Event?
          </p>
        </div>
        <div className="flex justify-center gap-10 my-[2.5rem]">
          <Button
            label="❌ Decline"
            btnFunction={decline}
            // icon="uil uil-times-circle"
            // bgColor="#6B3E2E"
            // txtColor="white"
          />
          <Button
            label="✅ Accept"
            btnFunction={accept}
            // bgColor="#6B3E2E"
            // txtColor="white"
          />
        </div>
        {accepted && (
          <div>
            <GuestForm />
          </div>
        )}
        {/* {declined && <DeclineModal message="OKS, Thank you for visiting" />} */}
      </div>
    </div>
  );
};

export default Section5;
