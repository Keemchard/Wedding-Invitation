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
        <p className="text-[30px]">Admin Login</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <InputField
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputField
          type="submit"
          value="LOGIN"
          inputWeight="bold"
          inputBgColor="#7F5946"
          inputTextColor="white"
        />
      </div>
      <div className="mt-[0.5rem] w-[100%]">
        <div>
          Not a user?{" "}
          <Link
            to="/"
            className="text-wd_coffee hover:text-wd_mikado_yellow font-bold underline"
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
