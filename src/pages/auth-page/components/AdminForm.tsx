import React, { FC, FormEvent } from "react";
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
        <InputField type="submit" value="LOGIN" inputWeight="bold" />
      </div>
    </form>
  );
};

export default AdminForm;
