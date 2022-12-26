import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React, { FormEvent, useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase-config";
import AdminForm from "./components/AdminForm";

//TODO: MAKE IT TRUE AUTH (NOT GET REQUEST)
const AdminAuthPage = () => {
  const [password, setPassword] = useState("");
  const email = process.env.REACT_APP_ADMIN_EMAIL as string;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    alert("delete this");
    try {
      const authenticate = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(authenticate);
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  return (
    <div>
      <AdminForm
        password={password}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AdminAuthPage;
