import React, { FormEvent, useState } from "react";
import InputField from "../../../../components/InputField";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase-config";
import { DAY_IN_NUMBER, MONTH, TIME, YEAR } from "../../../../utils/data_time";
import { toast_notif } from "../../../../utils/toast";
import Loading from "../../../../components/Loading";

const GuestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const addGuest = async (e: FormEvent) => {
    e.preventDefault();
    if (firstName.trim() === "" || lastName.trim() === "") {
      toast_notif({
        message: "⛔ Field(s) Cannot Be Empty!",
        theme_color: "dark",
      });
      return;
    }
    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "guest"), {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        date: `${MONTH} ${DAY_IN_NUMBER}, ${YEAR}`,
        time: TIME,
        //add comments/wishes/msg fields (optional)
      });
      //remove clg
      console.log("Document written with ID: ", docRef.id);
      toast_notif({
        message: `Thanks ${firstName}! for accepting our wedding invitation 🥰`,
        theme_color: "light",
      });
      setFirstName("");
      setLastName("");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(`Error adding document: ${e}`);
    }
  };

  if (loading) {
    return <Loading solo={false} />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <form className="sec-5-form p-[1rem]" onSubmit={addGuest}>
      <div className="sec-5-field flex gap-10">
        <InputField
          type="text"
          placeholder="Your Awesome First Name"
          inputBgColor="white"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <InputField
          type="text"
          placeholder="Your Cool Last Name"
          inputBgColor="white"
          value={lastName}
          onChange={(e) => {
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
          inputBgColor="#7F5946"
          inputTextColor="white"
        />
      </div>
    </form>
  );
};

export default GuestForm;
