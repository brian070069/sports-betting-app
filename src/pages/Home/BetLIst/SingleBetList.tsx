import React from "react";
import { RxCross2 } from "react-icons/rx";

const SingleBetList = ({ game }) => {
  const { teams, choosenOdds, choosenTeam } = game;

  return (
    <div>
      <div className="row justify-between bg-bgLightBlue py-3 px-2 rounded-lg">
        <div className="row gap-2">
          <button
            type="button"
            className="bg-white/70 text-black rounded-full p-[2px]"
          >
            <RxCross2 />
          </button>
          <div>
            <div className="flex gap-1 capitalize text-sm font-semibold">
              <span>{teams.homeTeam}</span>
              <span>vs.</span>
              <span>{teams.awayTeam}</span>
            </div>
            <h4 className="text-darkWhite text-sm tracking-wide pl-2 font-light capitalize ">
              {choosenTeam}
            </h4>
            <h4 className="text-[13px] pl-2 text-darkWhite font-extralight">
              starts 06/02, 22:45
            </h4>
          </div>
        </div>
        <h4 className="text-textGreen text-base font-bold">{choosenOdds}</h4>
      </div>
    </div>
  );
};

export default SingleBetList;
