import React, { FC } from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";

interface Props {
  guestLength: number;
  signOut: () => Promise<void>;
}

const Header: FC<Props> = ({ guestLength, signOut }) => {
  return (
    <header className="">
      <div className="bg-wd_coffee flex justify-around items-center pt-5 pb-5">
        <div className="flex items-center gap-7">
          <div>
            <InputField placeholder="Search (Optional)" />
            {/* //optional tong search input field*/}
          </div>
          <div>
            <p className="text-[20px] text-wd_mikado_yellow font-bold">
              GUEST COUNT: <span className="text-[25px]">{guestLength} 🔥</span>
            </p>
          </div>
        </div>
        <Button label="SIGN OUT" btnFunction={signOut} />
      </div>
    </header>
  );
};

export default Header;
