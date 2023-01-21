import React, { FC } from "react";
import Button from "../../../components/Button";

interface Props {
  guestLength: number;
  signOut: () => Promise<void>;
}

const Header: FC<Props> = ({ guestLength, signOut }) => {
  return (
    <header>
      <div className="bg-[aqua]">
        <div>GUEST COUNT: {guestLength}</div>
        <Button label="SIGN OUT" btnFunction={signOut} />
      </div>
    </header>
  );
};

export default Header;
