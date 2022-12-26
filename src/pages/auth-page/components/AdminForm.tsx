import React, { FC, FormEvent } from "react";
import InputField from "../../../components/InputField";

interface Prop {
  password: string;
  setPassword: (e: string) => string | void;
  onSubmit: (e: FormEvent) => void;
}

const AdminForm: FC<Prop> = ({ password, setPassword, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputField
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <InputField type="submit" value="login" />
    </form>
  );
};

export default AdminForm;
