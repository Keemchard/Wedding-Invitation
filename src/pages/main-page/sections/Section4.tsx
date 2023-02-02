import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import Loading from "../../../components/Loading";

const Section4 = () => {
  const [loading, setLoading] = useState(false);
  const [livestreamLink, setLivestreamLink] = useState("");

  const goToLivestream = () => {
    getLivestreamLink();
  };

  const getLivestreamLink = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "livestreamLink"));
      const link = querySnapshot.docs.map((item) => {
        return item.data();
      });
      setLivestreamLink(link[0].link);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLivestreamLink();
  }, []);

  return (
    <div className="sec-4-con p-[1rem] flex justify-center my-[5rem]">
      <div className="bg-wd_coffee p-[1rem] flex gap-3">
        <div className="text-white">
          <p className="font-bold">Join our Livestream</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="min-w-[170px] text-right">
          {loading ? (
            <Loading solo={false} />
          ) : (
            <a href={livestreamLink} target="_blank" rel="noreferrer">
              <div>
                <Button
                  label="Join Now"
                  // icon="uil uil-tv-retro"
                  btnFunction={goToLivestream}
                  // bgColor="#CCB494"
                  // txtColor="black"
                />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section4;
