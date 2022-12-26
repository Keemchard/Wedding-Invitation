import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const GuestList = () => {
  const [guest, getGuest] = useState<any>([{}]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //TODO: make types (remove any)
  const getGuestList = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "guest"));
      const guestData = querySnapshot.docs.map((item: any) => {
        return item.data();
      });
      getGuest(guestData);
      //TODO: remove clg
      console.log(guest);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setError(e);
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
        guest.map((x: any) => {
          return (
            <div key={Math.random()}>
              <div>FIRST NAME: {x.first_name}</div>
              <div>LAST NAME: {x.last_name}</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GuestList;
