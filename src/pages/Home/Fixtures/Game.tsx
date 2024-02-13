import React, { useState } from "react";
import FixturesTime from "./FixturesTime";
import GameButtons from "./GameButtons";

const Game = ({ fixture }) => {
  const { teams } = fixture;

  return (
    <div className=" border-solid border-b-[1px] pb-2  border-gray-700">
      <FixturesTime />
      <div className="row justify-between">
        <div className="flex flex-col font-medium capitalize text-sm gap-1">
          <h4>{teams.homeTeam}</h4>
          <h4>{teams.awayTeam}</h4>
        </div>
        <GameButtons fixture={fixture} />
      </div>
    </div>
  );
};

export default Game;
