import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import { toast_notif } from "../../../utils/toast";
import GuestForm from "./components/GuestForm";

interface Prop {
  section5Ref: React.MutableRefObject<HTMLDivElement | null>;
}

const Section5: FC<Prop> = ({ section5Ref }) => {
  const [accepted, setAccepted] = useState(false);

  const decline = () => {
    setAccepted(false);
    toast_notif({
      message: "Thank you, we understand and respect your decision 🤍",
      theme_color: "dark",
    });
  };
  const accept = () => {
    setAccepted(true);
    toast.dismiss();
  };

  return (
    <div
      ref={section5Ref}
      className="guest-form-main-con flex justify-center items-center p-[10px] my-14"
    >
      <div className="guest-form-con p-[20px]">
        <div>
          <p className="head-text text-[2rem] font-bold text-center">
            Will You Attend This Event?
          </p>
        </div>
        <div className="flex justify-center gap-10 my-[2.5rem]">
          <Button
            label="✅ Accept"
            btnFunction={accept}
            // bgColor="#6B3E2E"
            // txtColor="white"
          />
          <Button
            label="❌ Decline"
            btnFunction={decline}
            // icon="uil uil-times-circle"
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
