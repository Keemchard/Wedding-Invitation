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
    <div>
      {guest.length === 0 ? (
        <div>No Guest Yet</div>
      ) : (
        guest.map((guest: Guest) => {
          return (
            <div key={Math.random()}>
              <div>FIRST NAME: {guest.first_name}</div>
              <div>LAST NAME: {guest.last_name}</div>
              <div>DATE: {guest.date}</div>
              <div>TIME: {guest.time}</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GuestList;
