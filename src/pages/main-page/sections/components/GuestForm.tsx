import React, { useState } from "react";
import InputField from "../../../../components/InputField";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase-config";

const GuestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //TODO: create loading state
  //create loading and error FC
  //fix type (remove "any")

  const addGuest = async (e: any) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "guest"), {
        first_name: firstName,
        last_name: lastName,
        //add time and date fields
        //add comments/wishes/msg fields (optional)
      });
      console.log("Document written with ID: ", docRef.id);
      alert(`Thanks ${firstName}`);
      setFirstName("");
      setLastName("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form className="p-[1rem]" onSubmit={addGuest}>
      <div className="flex gap-10">
        <InputField
          type="text"
          placeholder="Your Awesome First Name"
          inputBgColor="#CCB494"
          value={firstName}
          onChange={(e: any) => {
            setFirstName(e.target.value);
          }}
        />
        <InputField
          type="text"
          placeholder="Your Cool Last Name"
          inputBgColor="#CCB494"
          value={lastName}
          onChange={(e: any) => {
            setLastName(e.target.value);
          }}
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
