import React from "react";
import ica from "../../images/customer/ica.svg";
import challenge from "../../images/challenge.jpg";
import vision from "../../images/vision.jpg";
import chill from "../../images/chill.jpg";
import { karriarData } from "../../Data/Karriar";
const Karriar = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-1 flex">
        <h1 className="text-center md:pt-32 sm:pt-7 pt-7 pb-16 text-3xl font-bold text-black-darkest">
          Gillar du utmaningar?
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-1 flex">
        <div className="max-w-lg px-2 md:pt-4 pb-11 pt-4 md:block hidden">
          <p className="text-base text-center text-grey-normal font-normal pb-12">
            Vi med! Vi tror på att uppdraget ska vara utmanade, roligt och utvecklande.
            Som konsult ställs du alltid inför nya utmanade uppgifter hos kunder i
            spännande branscher.
            Vi hjälper dagligen våra kunder att lösa svåra problem med modern teknik.
          </p>
          <p className="text-base text-center text-grey-normal font-normal pb-12">
            Sitter du fast med något problem så har du alltid teamet att falla tillbaka på!
            Med vår starka gemenskap kan du alltid känna dig trygg med att få hjälp och
            guidning.
          </p>
        </div>
        <div className="px-4 w-11/12 md:pt-4 pb-11 pt-4 md:block hidden">
          <img src={challenge} className="rounded-lg"></img>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-1 flex place-content-end">
        <h1 className="text-center md:pt-32 sm:pt-7 pt-7 pb-16 text-3xl font-bold text-black-darkest">
          Vill du utvecklas?
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-1 flex">
        <div className="px-4 w-11/12 md:pt-4 pb-11 pt-4 md:block hidden">
          <img src={vision} className="rounded-lg"></img>
        </div>
        <div className="max-w-lg px-2 md:pt-4 pb-11 pt-4 md:block hidden">
          <p className="text-base text-center text-grey-normal font-normal pb-12">
            Vi tror på kontinuerlig utveckling! Vi uppmanar dig att ständigt sätta
            upp nya karriärsmål och pushar dig att nå dom.
          </p>
          <p className="text-base text-center text-grey-normal font-normal pb-12">
            Är du intresserad av att Certifiera dig inom det senaste teknikerna?
            Gillar du att bidra till open source? Hacka med oss andra på våra
            interna projekt? Konferans utomlands? Code Labs stödjer dig i din
            karriärsresa.
          </p>
        </div>
      </div >

      <div className="max-w-6xl mx-auto px-6 md:px-1 flex">
        <h1 className="text-center md:pt-32 sm:pt-7 pt-7 pb-16 text-3xl font-bold text-black-darkest">
          Laddar du batterierna?
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-1 flex">
        <div className="px-4 w-11/12 md:pt-4 pb-11 pt-4 md:block hidden">
          <img src={chill} className="rounded-lg"></img>
        </div>
        <div className="max-w-lg px-2 md:pt-4 pb-11 pt-4 md:block hidden">
          <p className="text-base text-center text-grey-normal font-normal pb-12">
            Vi vet att återhämtning är en stor del av att kunna prestera på topp
            över lång tid. Både fysisk och psykiskt behöver vi ta hand om oss för
            att må bra.
          </p>
          <p className="text-base text-center text-grey-normal font-normal pb-12">
            Hur laddar du batterierna?
          </p>
          <p className="text-base text-center text-grey-normal font-normal pb-12">
            Gillar du att träna, cykla downhill eller simma? Vi erbjuder
            friskvårdsbidrag motsvarande ett årskort på sats.
          </p>
          <p className="text-base text-center text-grey-normal font-normal pb-12">
            Hur laddar du batterierna? Känner du dig utmattad? Vi har sjukvårdsförsärkingar i toppklass som
            ger dig det stöd du behöver.
          </p>
        </div>
      </div >
    </div >
  );
};

export default Karriar;
