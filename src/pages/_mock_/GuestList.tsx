import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const GuestList = () => {
  const [guest, getGuest] = useState<any>([{}]);

  const getGuestList = async () => {
    const querySnapshot = await getDocs(collection(db, "guest"));
    const guestData = querySnapshot.docs.map((item: any) => {
      return item.data();
    });
    getGuest(guestData);

    console.log(guest);
  };

  useEffect(() => {
    getGuestList();
  }, []);

  return (
    <div>
      {guest.map((x: any) => {
        return (
          <div key={Math.random()}>
            <div>FIRST NAME: {x.first_name}</div>
            <div>LAST NAME: {x.last_name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default GuestList;
