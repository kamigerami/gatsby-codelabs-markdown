import React from "react";
import { teamData } from "../../Data/TeamData";
import github from "../../images/social/github.svg";
const Team = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 md:px-1 md:py-56 py-24 ">
        <div className="flex w-full justify-center flex-wrap">
          {teamData.map((items, index) => {
            return (
              <div className="md:px-5 mb-12" key={index}>
                <div className="flex px-7 w-80 flex-col items-center justify-center text-center  ">
                  <img src={items.picture} alt="" className="w-52 rounded-full" />
                  <h6 className="font-semibold text-base text-black-dark mb-1">
                    {items.name}
                  </h6>
                  <p className="font-normal text-sm mb-4 text-grey-normal">
                    {items.designation}
                  </p>
                  <p className="font-normal text-sm text-black-dark mb-4">
                    {items.description}
                  </p>
                  <a href ={items.github_url} target="_blank" rel="noreferrer noopener">
                  <img
                    src={github}
                    alt="github"
                    className=" w-6 h-6"
                  />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
