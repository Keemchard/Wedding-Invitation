import React from "react";
import Footer from "../../components/Footer";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

const MainPage = () => {
  return (
    <>
      <div className="main w-full bg-[salmon]">
        <div>
          <Section1 />
        </div>
        <div className="bg-[gray] w-[75%] m-auto p-[20px]">
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
