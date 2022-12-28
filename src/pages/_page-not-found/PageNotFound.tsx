import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const PageNotFound = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="flex items-center">
        <div className="border-r-[1px] border-black py-[0.5rem] pr-[1rem] mr-[1rem] font-bold text-[red] text-[20px]">
          404 ERROR
        </div>
        <div>Page Not Found</div>
      </div>
      <div className="mt-[1rem]">
        <Link to="/">
          <Button label="Go To Home Page" bgColor="brown" txtColor="white" />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
