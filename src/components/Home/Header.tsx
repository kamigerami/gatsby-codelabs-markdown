import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div>
      <div className="max-w-8xl px-6  md:px-10 sm:px-6 flex items-center justify-center  md:pt-28 pt-20 pb-32 md:pb-56 ">
        <div className="flex justify-center flex-col items-center flex-wrap">
          <h2 className="font-title font-normal md:text-3xl sm:text-xl text-base text-center pt-10">
            Kod är vår <span className="italic">passion, gemenskap</span> är vår <span className="italic">styrka</span>.
          </h2>
          <br />
          <h1 className="font-title font-light md:text-7xl text-4xl mb-8 text-center">
            Vi är <span className="font-black">codelabs</span>
          </h1>
          <Link to="/karriar/"
            className="md:bg-white md:text-black-dark bg-grey-blue  text-white sm:px-4 py-2.5 cursor-pointer hover:shadow-xl px-7 pt-1 pb-2  justify-center rounded-full flex items-center border md:border-grey-normal transition-all hover:bg-grey-normal hover:text-white"
          >
            Väx med oss
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
