import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import AdminForm from "./components/AdminForm";

//TODO: MAKE IT TRUE AUTH (NOT GET REQUEST)\
const email = process.env.REACT_APP_ADMIN_EMAIL as string;
const AdminAuthPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //TODO apply onAuthStateChanged
  //Links: https://firebase.google.com/docs/auth/web/start#web-version-9_3
  //https://firebase.google.com/docs/auth/web/manage-users
  //https://firebase.google.com/docs/auth/web/password-auth
  //https://firebase.google.com/docs/reference/js/v8/firebase.User

  //TODO add password validation
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      alert("login success!");
      //check if user is already login
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.email;
          console.log(user);
          navigate("/guest_list");

          // ...
        } else {
          // User is signed out
          // ...
        }
      });
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
