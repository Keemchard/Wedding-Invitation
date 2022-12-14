import React from "react";
import InputField from "../../../../components/InputField";

const GuestForm = () => {
  return (
    <form className="p-[1rem]">
      <div className="flex gap-10">
        <InputField />
        <InputField />
      </div>
    </form>
  );
};

export default GuestForm;
