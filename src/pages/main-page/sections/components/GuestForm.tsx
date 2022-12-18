import React from "react";
import InputField from "../../../../components/InputField";

const GuestForm = () => {
  return (
    <form className="p-[1rem]">
      <div className="flex gap-10">
        <InputField type="text" placeholder="Your Awesome First Name" />
        <InputField type="text" placeholder="Your Cool Last Name" />
      </div>
      <div className="mt-[1rem]">
        <InputField
          type="submit"
          value={`submit`.toUpperCase()}
          inputWidth="100%"
          inputWeight="bold"
        />
      </div>
    </form>
  );
};

export default GuestForm;
