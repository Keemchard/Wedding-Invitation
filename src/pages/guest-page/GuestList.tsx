import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase-config";
import { Guest } from "../../types/types";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const GuestList = () => {
  const [guest, getGuest] = useState<Guest[]>([{}]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const getGuestList = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "guest"));
      const guestData = querySnapshot.docs.map((item) => {
        return item.data();
      });
      getGuest(guestData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(`Error: ${e}`);
    }
  };

  const sign_out = async () => {
    try {
      setLoading(true);
      await auth.signOut();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(`Error: ${e}`);
    }
  };

  useEffect(() => {
    getGuestList();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {!user && (
        <div>
          <div>
            <div>Please login as an admin to see Guest List</div>
            <Link to="/admin_auth">
              <Button label="Login" />
            </Link>
          </div>
          <div>
            <div>or back to home page</div>
            <Link to="/">
              <Button label="Home Page" />
            </Link>
          </div>
        </div>
      )}

      {user && (
        <>
          <div className="bg-[aqua]">
            <div>GUEST #: {guest.length}</div>
            <Button label="signout" btnFunction={sign_out} />
          </div>

          <div className="bg-[salmon] p-7 flex flex-col items-center">
            {guest.length === 0 ? (
              <div className="bg-[gray]">No Guest Yet</div>
            ) : (
              <table className="guest-table bg-[gray] w-[80%]">
                <tbody>
                  <tr>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>DATE</th>
                    <th>TIME</th>
                  </tr>
                  {guest.map((guest: Guest) => {
                    return (
                      <tr key={Math.random()}>
                        <td>{guest.first_name}</td>
                        <td>{guest.last_name}</td>
                        <td>{guest.date}</td>
                        <td>{guest.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GuestList;
