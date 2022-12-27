import { signInWithEmailAndPassword } from "firebase/auth";
import React, { FormEvent, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import AdminForm from "./components/AdminForm";

//TODO: MAKE IT TRUE AUTH (NOT GET REQUEST)\
const email = process.env.REACT_APP_ADMIN_EMAIL as string;
const AdminAuthPage = () => {
  const [password, setPassword] = useState("");

  //TODO: add/apply loading and error state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //TODO apply onAuthStateChanged
  //Links: https://firebase.google.com/docs/auth/web/start#web-version-9_3
  //https://firebase.google.com/docs/auth/web/manage-users
  //https://firebase.google.com/docs/auth/web/password-auth
  //https://firebase.google.com/docs/reference/js/v8/firebase.User
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    alert("delete this");
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      alert("login success!");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      //remove clg
      console.log(`Error: ${e}`);
      setError(`INVALID PASSWORD! ${e}`);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  if (loading) {
    return <div>loading......</div>;
  }

  return (
    <div>
      <AdminForm
        password={password}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
      {error && <div className="text-[red]">{error}</div>}
    </div>
  );
};

export default AdminAuthPage;
