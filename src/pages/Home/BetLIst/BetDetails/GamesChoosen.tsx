import React from "react";

const GamesChoosen = ({ betList }) => {
  return (
    <div className="flex flex-col gap-2 mt-8 mb-8">
      {betList?.gameChoosen &&
        betList?.gameChoosen?.map((gameChoosen) => {
          const { id, teams, choosenTeam, choosenOdds } = gameChoosen;

          return (
            <div
              key={id}
              className="flex flex-col bg-bgLightBlue px-3 py-2 rounded-md capitalize gap-2"
            >
              <div className="grid grid-cols-3 justify-between font-medium text-[14px]">
                <h4>{teams?.homeTeam}</h4>
                <span className="text-center">Vs.</span>
                <h4 className="text-end">{teams?.awayTeam}</h4>
              </div>
              <div className="row justify-between text-darkWhite">
                <div className="text-sm row gap-1 text-yellow-500">
                  <span>Pick:</span>
                  <span>{choosenTeam}</span>
                </div>
                <div className="row gap-1  text-sm">
                  <span>Odds:</span>
                  <span>{choosenOdds}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GamesChoosen;
