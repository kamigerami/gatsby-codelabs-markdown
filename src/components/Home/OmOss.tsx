import React from "react";
import { Link } from "gatsby";
import ipad from "../../images/ipad.svg";
import ica from "../../images/customer/ica.svg";
import pricer from "../../images/customer/pricer.svg";
import dice from "../../images/customer/dice.svg";
import hm from "../../images/customer/hm.svg";
import kindred from "../../images/customer/kindred.svg";
import pricerunner from "../../images/customer/pricerunner.svg";
import netent from "../../images/customer/netent.svg";
import tui from "../../images/customer/tui.svg";
import zebware from "../../images/customer/zebware.svg";
const OmOss = () => {
  return (
    <div>
      <div className=" bg-grey-normal w-full relative ">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="lg:max-w-md w-full">
              <div className="block md:hidden">
                <div className="max-w-sm mx-auto">
                  <img src={ipad} alt="ipad" className="w-full h-auto" />
                </div>
              </div>
              <h2 className="font-title font-black text-3xl md:text-5xl text-center md:text-left text-white mb-2">
                Om oss
              </h2>
              <p className="font-title text-sm font-normal text-white text-center md:text-left mb-8">
                Code Labs är ett konsultbolag som består av en sammansvetsad grupp människor med
                olika bakgrunder och intressen som har en stor passion för teknik och utveckling.
                Vi uppskattar att dela med oss av det vi lär oss och gillar att umgås och hitta på
                saker.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  to="/team/"
                  className="font-title text-base font-normal px-4 text-white border border-white w-36 pt-1 pb-2 justify-center rounded-full flex items-center transition-all hover:bg-white hover:text-black-dark"
                >
                  Träffa teamet
                </Link>
              </div>
            </div>
            <div className="hidden md:block lg:absolute lg:left-2/4 lg:-top-7">
              <div className="lg:max-w-lg lg:mx-auto">
                <img src={ipad} alt="ipad" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-24">
        <div className="flex justify-center flex-wrap">
          <img src={ica} alt="ica" className='mx-4 mb-7' />
          <img src={pricer} alt="pricer" className='mx-4 mb-7' />
          <img src={dice} alt="dice" className='mx-4 mb-7' />
          <img src={hm} alt="hm" className='mx-4 mb-7' />
          <img src={netent} alt="netent" className='mx-4 mb-7' />
          <img src={tui} alt="tui" className='mx-4 mb-7' />
          <img src={pricerunner} alt="pricerunner" className='mx-4 mb-7' />
          <img src={kindred} alt="kindred" className='mx-4 mb-7' />

          <img src={zebware} alt="zebware" className='mx-4 mb-7' />
        </div>
      </div>
    </div>
  );
};

export default OmOss;
