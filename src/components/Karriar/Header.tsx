import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-white karriar-bg relative object-cover">
        <div className="max-w-6xl mx-auto ">
          <div className="absolute bottom-0">
            <div className="bg-white max-w-lg px-10 md:pt-11 pb-11 pt-10 md:block hidden">
              <h1 className=" text-grey-bluish md:text-5xl text-3xl pb-4 font-bold md:text-left text-center">
                Väx med oss
              </h1>
              <p className="text-base text-grey-dark font-normal md:text-left text-center">
                Vill du också hjälpa ambitiösa företag med systemutveckling, molntjänster, infrastruktur
                eller personligen utvecklas inom nya områden tillsammans med likasinnade kollegor?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full px-10 md:pt-11 pb-11 pt-10 md:hidden block">
        <h1 className=" text-grey-bluish md:text-5xl text-3xl pb-4 font-bold md:text-left text-center">
          Väx med oss
        </h1>
        <p className="text-base text-grey-dark font-normal md:text-left text-center">
          Om du vill hjälpa ambitiösa företag med systemutveckling, molntjänster, infrastruktur
          eller personligen utvecklas inom nya områden tillsammans med likasinnade kollegor.
        </p>
      </div>
    </div>
  );
};

export default Header;
