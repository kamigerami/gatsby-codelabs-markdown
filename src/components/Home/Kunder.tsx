import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import dice from "../../images/dice.svg";
import tui from "../../images/tui.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
const Kunder = () => {
  var settings = {
    150: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    880: {
      slidesPerView: 2,
      spaceBetween: 10
    },
  };
  
  return (
    <div>
      <div className="max-w-7xl m-auto pt-24 px-14 flex">
        <div className="md:w-2/4 flex items-center">
          <h2 className="font-title font-bold text-center md:text-left text-3xl md:text-5xl">
            Våra kunder tycker till
          </h2>
        </div>
        <div className="w-2/4 hidden md:flex px-8 justify-end">
          <StaticImage
            src="../../images/quote.svg"
            alt="quote"
            className="w-36 h-auto text-gray-50"
          />
        </div>
      </div>
      <div className="max-w-7xl m-auto pt-4 px-4 md:px-10 flex justify-center flex-wrap pb-24">
        <Swiper spaceBetween={10} slidesPerView={2} breakpoints={settings}>
          <SwiperSlide>
            <div className="w-full flex justify-center mb-8 h-auto md:h-60">
              <div className="ourcutomer-shadow py-6 px-8 mx-w-600 flex flex-col justify-between  border_1 border-grey-lightest">
                <div className="flex justify-center items-center flex-col text-center">
                  <img src={dice} alt="dice" className="w-24  mb-3" />
                  <p className="font-title font-normal text-sm break-words">
                    Code Labs konsult visade prov på anpassningsförmåga,
                    stresstålighet och en förmåga att ha många bollar i luften
                    då de involverades i flera projekt samtidigt.
                    Jag rekommenderar Code Labs varmt och anlitar gladeligen deras
                    konsulter i framtiden.
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-title font-bold">Jonas Lindström</p>
                  <p>DevOps Operations Manager</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full flex justify-center mb-8 h-auto md:h-60">
              <div className="ourcutomer-shadow py-6 px-8 mx-w-600 flex flex-col justify-between border_1 border-grey-lightest">
                <div className="flex justify-center items-center flex-col text-center">
                  <img src={tui} alt="tui" className="w-24 mb-3" />
                  <p className="font-title font-normal text-sm">
                    Vi tycker Code Labs konsult varit en tillgång vad gäller att
                    driva det tekniska arbetet framåt och få nya idéer kring
                    förbättringar. Konsulten har varit lika duktig på att sätta
                    sig in i befintliga lösningar, utveckla dem som att starta
                    upp nytt. Vi kan varmt rekommendera Code Labs till andra!
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-title font-bold">Maja Wedfelt</p>
                  <p>Delivery Lead</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Kunder;
