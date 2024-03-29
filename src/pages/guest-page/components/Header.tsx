import { updateDoc, doc } from "firebase/firestore";
import { FC, useState } from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import Loading from "../../../components/Loading";
import { db } from "../../../firebase/firebase-config";
import isValidUrl from "../../../utils/isValidUrl";
import { toast_notif } from "../../../utils/toast";

interface Props {
  guestLength: number;
  signOut: () => Promise<void>;
}

const Header: FC<Props> = ({ guestLength, signOut }) => {
  const [onUpdateLivestreamUrl, setOnUpdateLivestreamUrl] = useState(false);
  const [userInputLivestreamLink, setUserInputLivestreamLink] = useState("");
  const [loading, setLoading] = useState(false);

  const updateLink = async () => {
    try {
      if (isValidUrl(userInputLivestreamLink)) {
        setLoading(true);
        const LivestreamRef = doc(db, "livestreamLink", "e0dZx0UExIK6bC8EACHT");
        await updateDoc(LivestreamRef, {
          link: userInputLivestreamLink,
        });
        toast_notif({
          message: `Updated! Your new link is ${userInputLivestreamLink}`,
          theme_color: "light",
        });
        setOnUpdateLivestreamUrl(false);
        setUserInputLivestreamLink("");
        setLoading(false);
      } else {
        toast_notif({
          message: "Invalid URL! 🤧",
          theme_color: "dark",
        });
      }
    } catch (e) {
      setLoading(false);
      toast_notif({
        message: `${e}`,
        theme_color: "dark",
      });
    }
  };

  return (
    <header className="guest-header">
      <div className="bg-[#FDD6D6] flex justify-around items-center pt-5 pb-5">
        {/* <div className="flex gap-5">
          {loading ? (
            <Loading solo={false} />
          ) : (
            <>
              {onUpdateLivestreamUrl && (
                <div className="edit-link-div flex gap-3">
                  <InputField
                    value={userInputLivestreamLink}
                    onChange={(e) => {
                      setUserInputLivestreamLink(e.target.value);
                    }}
                    inputWidth={"300px"}
                    placeholder="Enter Updated Livestream Link"
                  />
                  <div className="edit-link-btn-div flex gap-1 w-full">
                    <Button
                      label="CANCEL"
                      btnFunction={() => {
                        setOnUpdateLivestreamUrl(false);
                      }}
                    />
                    <Button label="UPDATE" btnFunction={updateLink} />
                  </div>
                </div>
              )}
              {!onUpdateLivestreamUrl && (
                <Button
                  label="Update Livestream link"
                  btnFunction={() => {
                    setOnUpdateLivestreamUrl(true);
                  }}
                />
              )}
            </>
          )}
        </div> */}
        <div className="flex items-center gap-32">
          <div>
            <p className="text-[20px] text-wd_mikado_yellow font-bold">
              GUEST COUNT: <span className="text-[25px]">{guestLength} 🔥</span>
            </p>
          </div>
          <div className="signout-btn">
            <Button
              label=""
              icon="uil uil-sign-out-alt"
              // width="50px"
              height="70px"
              btnRadius="50%"
              btnFunction={signOut}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
