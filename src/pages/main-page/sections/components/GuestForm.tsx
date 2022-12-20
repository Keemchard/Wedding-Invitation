import React from "react";
import InputField from "../../../../components/InputField";

const GuestForm = () => {
  return (
    <form className="p-[1rem]">
      <div className="flex gap-10">
        <InputField
          type="text"
          placeholder="Your Awesome First Name"
          inputBgColor="#CCB494"
        />
        <InputField
          type="text"
          placeholder="Your Cool Last Name"
          inputBgColor="#CCB494"
        />
      </div>
      <div className="mt-[1rem]">
        <InputField
          type="submit"
          value={`submit`.toUpperCase()}
          inputWidth="100%"
          inputWeight="bold"
          inputBgColor="#CCB494"
        />
      </div>
    </form>
  );
};

export default GuestForm;
