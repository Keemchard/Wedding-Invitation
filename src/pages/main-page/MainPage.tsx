import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

//THIS IS THE FIRST MOCK VERSION (I'LL MAKE A POR FOR THIS)

const MainPage = () => {
  const section5Ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    if (section5Ref.current) {
      section5Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="main relative w-full bg-white">
        <div>
          <Section1 handleClick={handleClick} />
        </div>
        <div className="section-con w-[75%] m-auto p-[20px]">
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 section5Ref={section5Ref} />
        </div>
        <Footer />

        <div className="fixed bottom-5 right-5">
          <Link to="/admin_auth">
            <Button
              label="" //TODO: add admin logo instead of text
              icon="uil uil-user-square"
              // bgColor="gray"
              // txtColor="white"
              // width="0px"
              height="70px"
              btnRadius="50%" //TODO: make it circle 50%
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
