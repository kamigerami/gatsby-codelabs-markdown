import React from "react";

import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import {FiX} from "@react-icons/all-files/fi/FiX";
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaFacebookSquare} from "@react-icons/all-files/fa/FaFacebookSquare";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="bg-white flex justify-between py-5 px-4 shadow-lg">
        <div className="flex self-center">
          <Link to="/">
            <StaticImage
              className="w-28"
              src="../../images/logo/codelabs.svg"
              alt="codelabs"
            />
          </Link>
        </div>
        <span onClick={toggleDrawer}>
          <GiHamburgerMenu className="w-8 h-8 cursor-pointer" />
        </span>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size={300}
        style={{backgroundColor: "#565656"}}
      >
        <div className="flex justify-center pt-10 pb-14">
        <Link to="/">
            <StaticImage
              className="w-28"
              src="../../images/logo/codelabs_white.svg"
              alt="codelabs"
            />
          </Link>
           {/* <FiX /> */}
          </div>
        <ul className="flex flex-col justify-center pb-10">
          <li className=" py-2 flex justify-center ">
            <Link
              to="/karriar/"
              className="font-normal text-xl text-center text-white hover:text-white hover:font-bold"
            >
              Karriär
            </Link>
          </li>
          <li className="py-2 flex justify-center">
            <Link
              to="/team/"
              className="font-normal text-xl text-center text-white hover:text-white hover:font-bold"
            >
              Team
            </Link>
          </li>
          <li className="py-2 flex justify-center">
            <Link
              to="/blogs"
              className="font-normal text-xl text-center text-white hover:text-white hover:font-bold"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className=" flex justify-center md:justify-end md:pt-1.5">
          <ul className="flex">
            <li className="px-3">
              <a
                href="https://www.linkedin.com/company/code-labs-ab/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin className="w-4 h-4 text-white" />
              </a>
            </li>
            <li className="px-3">
              <a
                href="https://www.instagram.com/codelabsab/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
            </li>
            <li className="px-3">
              <a
                href="https://www.facebook.com/codelabsab/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebookSquare className="w-4 h-4 text-white" />
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
