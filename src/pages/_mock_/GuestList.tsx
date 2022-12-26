import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { Guest } from "../../types/types";

const GuestList = () => {
  const [guest, getGuest] = useState<Guest[]>([{}]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getGuestList = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "guest"));
      const guestData = querySnapshot.docs.map((item) => {
        return item.data();
      });
      getGuest(guestData);
      //TODO: remove clg
      console.log(guest);
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
      <div>GUEST #: {guest.length}</div>

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
  );
};

export default GuestList;
