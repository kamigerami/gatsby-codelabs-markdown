import React from "react";
import { Link } from "gatsby";
const Formaner = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto flex lg:pb-60 pb-20 justify-center items-center flex-col">
        <div className="mb-16  mt-28">
          <h2 className="font-title font-black text-black-dark text-center md:text-left text-4xl md:text-6xl">Vårt erbjudande</h2>
        </div>
        <div className="flex text-center flex-wrap">
          <div className="px-12 pb-5 lg:w-1/3 md:w-2/4 w-full flex flex-col items-center">
            <img src="https://img.icons8.com/material-rounded/48/000000/teamwork.png" className="mb-4 h-12" alt="teamwork" />
            <h5 className="font-title font-semibold text-2xl mb-2">Team</h5>
            <p className="text-center md:text-left px-4">
              Arbeta med ett tight team med stor gemenskap och hög kompetens som gillar att hitta på saker tillsammans.
            </p>
          </div>
          <div className="px-12 pb-5 lg:w-1/3 md:w-2/4 w-full flex flex-col items-center">
            <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-code-coding-kiranshastry-solid-kiranshastry-2.png"
              className="mb-4 h-12"
              alt="cash-benifits"
            />
            <h5 className="font-title font-semibold text-2xl mb-2">Välj utrustning</h5>
            <p className="text-center md:text-left px-4">
              Behöver du en uppgradera din utrusning? Ny dator? Leasa en ny bil? Inga problem på Code Labs
            </p>
          </div>
          <div className=" px-12 pb-5 lg:w-1/3 md:w-2/4 w-full flex flex-col items-center ">
            <img src="https://img.icons8.com/ios-filled/50/000000/medical-doctor.png" className="mb-4 h-12" alt="healthcare"
            />
            <h5 className="font-title font-semibold text-2xl mb-2">Privat Sjukvård</h5>
            <p className="text-center md:text-left px-4">
              Vi erbjuder privatsjukvårdsförsäkring för alla våra anställda. Årliga hälsokontroller ingår.
            </p>
          </div>
        </div>
        <div className=" pt-20 flex flex-col md:flex-row justify-between px-4 ">
          <div className="lg:w-3/4 w-full mb-6 flex justify-center flex-col">
            <p className="font-title font-semibold text-center md:text-left text-base">
              Vill du bli en del av teamet?
            </p>
            <p className="font-title text-sm text-center md:text-left font-normal">Se tjänster vi söker.</p>
          </div>
          <div className=" lg:w-3/12 px-6  w-full">
            <Link to="/karriar/"
              className="font-title border border-grey-normal hover:text-grey-normal text-white rounded-full pt-1 pb-2 text-base w-36 hover:shadow-xl justify-center flex items-center bg-grey-normal  hover:bg-white"
            >
              Lediga tjänster
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formaner;
