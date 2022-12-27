import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import AdminForm from "./components/AdminForm";

const email = process.env.REACT_APP_ADMIN_EMAIL as string;
const AdminAuthPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
          //remove clg
          console.log(user.email);
          navigate("/guest_list");
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
