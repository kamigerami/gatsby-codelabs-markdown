import React from "react";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import linkedin from "../../images/social/linkedin.svg";
import instagram from "../../images/social/instagram.svg";
import facebook from "../../images/social/facebook.svg";
import logo from "../../images/logo/codelabs.svg";
const Footer = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto  px-10 pb-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="flex justify-center md:justify-center pb-4">
            <Link to="/">
              <img src={logo} alt="Code Labs Logo" className='w-28' />
            </Link>
          </div>

          <div className=" md:-mt-0.5 pb-6">
            <p className='text-xl text-center'>© 2021 codelabs. All rights reserved.</p>
          </div>

          <div className=" flex justify-center md:justify-end md:pt-1.5">
            <ul className="flex">
              <li className="px-3">
                <a
                  href="https://www.linkedin.com/company/code-labs-ab/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={linkedin} className="w-4 h-4" alt="linkedin" />
                </a>
              </li>
              <li className="px-3">
                <a
                  href="https://www.instagram.com/codelabsab/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={instagram} className="w-4 h-4" alt="instagram" />
                </a>
              </li>
              <li className="px-3">
                <a
                  href="https://www.facebook.com/codelabsab/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
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

export default Footer;
