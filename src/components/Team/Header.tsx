import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-white team-bg relative object-cover">
        <div className="max-w-6xl mx-auto ">
          <div className="absolute -bottom-36">
            <div className="bg-white max-w-lg px-10 py-12 md:block hidden">
              <h1 className=" text-grey-bluish text-4xl pb-4 font-bold">
                Träffa teamet
              </h1>
              <p className="text-base text-grey-dark font-normal pb-5">
                Träffa våra superstjärnor. Vi är ett gäng engagerade kollegor
                och vänner som älskar att skriva kod och snacka tech. Oroa dig
                inte för vi älskar att kavla upp ärmen och få jobb gjort också!
              </p>
              <p className="font-normal text-base text-grey-dark mb-10 ">
                Intresserad av att joina vårt team? Kolla in vår karriär sida!
              </p>
              <Link to="/karriar/" className=" bg-grey-blue text-white px-4 py-2.5 cursor-pointer rounded-full transition-all hover:shadow-xl">
                Sök nu
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full px-10 md:pt-11 pb-11 pt-10 md:hidden block">
        <h1 className=" text-grey-bluish text-4xl pb-4 font-bold">
          Träffa teamet
        </h1>
        <p className="text-base text-grey-dark font-normal pb-5">
          Träffa våra superstjärnor. Vi är ett gäng engagerade kollegor och
          vänner som älskar att skriva kod och snacka tech. Oroa dig inte för vi
          älskar att kavla upp ärmen och få jobb gjort också!
        </p>
        <p className="font-normal text-base text-grey-dark mb-10 ">
          Intresserad av att joina vårt team? Kolla in vår karriär sida!
        </p>
        <Link to="/karriar/" className=" bg-grey-blue text-white px-4 py-2.5 cursor-pointer rounded-full transition-all hover:shadow-xl">
          Sök nu
        </Link>
      </div>
    </div>
  );
};

export default Header;
