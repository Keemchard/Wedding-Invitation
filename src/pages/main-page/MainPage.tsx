import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

const MainPage = () => {
  return (
    <>
      <div className="main relative w-full bg-white">
        <div>
          <Section1 />
        </div>
        <div className="section-con w-[75%] m-auto p-[20px]">
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
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
