import React, { useState } from "react";

import GameButton from "./GameButton";

const GameButtons = ({ fixture }) => {
  const [selectedButton, setSelectedButton] = useState("");
  const id = ["home", "draw", "away"];

  return (
    <div className="row gap-2 text-sm font-semibold ">
      {id.map((id) => {
        return (
          <GameButton
            key={id}
            fixture={fixture}
            id={id}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
        );
      })}
    </div>
  );
};

export default GameButtons;
