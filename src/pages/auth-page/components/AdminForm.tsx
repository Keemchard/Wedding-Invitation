import React, { FC, FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";

interface Prop {
  password: string;
  setPassword: (e: string) => string | void;
  onSubmit: (e: FormEvent) => void;
}

//TODO: put admin logo instead of text "Admin Login" (think again if goods)
const AdminForm: FC<Prop> = ({ password, setPassword, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center w-[320px]">
      <div className="mb-5">
        <p className="head-text text-[30px] font-bold">Admin Login</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <InputField
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputField
          type="submit"
          value="LOGIN"
          inputWeight="bold"
          inputBgColor="#E1726E"
          inputTextColor="white"
        />
      </div>
      <div className="mt-[0.5rem] w-[100%]">
        <div>
          Not an admin?{" "}
          <Link
            to="/"
            className="text-[#E1726E] hover:text-wd_coffee font-bold underline"
          >
            Back To Home Page
          </Link>
        </div>
        {/* <Link to="/">
          <Button label="Back To Home Page" width="100%" />
        </Link> */}
      </div>
    </form>
  );
};

export default AdminForm;
