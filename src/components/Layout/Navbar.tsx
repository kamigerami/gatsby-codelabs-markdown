import React from "react";
import { Link } from "gatsby";
import MobileMenu from "./MobileMenu";
import linkedin from "../../images/social/linkedin.svg"
import instagram from "../../images/social/instagram.svg"
import facebook from "../../images/social/facebook.svg"
import logo from "../../images/logo/codelabs.svg"
const Navbar = () => {
  return (
    <div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>

      <div className="hidden md:block fixed left-0 right-0 bg-white z-50">
        <div className="max-w-6xl  mx-auto py-4 flex justify-between">
          <div className="w-1/3">
            <Link to="/">
              <img
                className="w-24"
                src={logo}
                alt="Code Labs Logo"
              />
            </Link>
          </div>
          <div className="w-1/3 flex items-center justify-center px-4 ">
            <ul className="flex ">
              <li className=" px-5 ">
                <Link
                  to="/karriar/"
                  className="font-normal text-base hover:font-bold"
                >
                  Karriär
                </Link>
              </li>
              <li className="px-5">
                <Link
                  to="/team/"
                  className="font-normal text-base hover:font-bold"
                >
                  Team
                </Link>
              </li>
              <li className="px-5">
                <Link
                  to="/blogs"
                  className="font-normal text-base hover:font-bold"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3 flex items-center justify-end px-4">
            <ul className="flex justify-center">
              <li className="px-3">
                <a href="https://www.linkedin.com/company/code-labs-ab/" target="_blank" rel="noreferrer noopener">
                  <img src={linkedin} className="w-4 h-4" alt="linkedin" />
                </a>
              </li>
              <li className="px-3">
                <a href="https://www.instagram.com/codelabsab/" target="_blank" rel="noreferrer noopener">
                  <img src={instagram} className="w-4 h-4" alt="instagram" />
                </a>
              </li>
              <li className="px-3">
                <a href="https://www.facebook.com/codelabsab/" target="_blank" rel="noreferrer noopener">
                  <img src={facebook} className="w-4 h-4" alt="facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
