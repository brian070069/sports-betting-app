import React from "react";
import { useNavigate } from "react-router-dom";

const EmpytBet = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center  ">
        <h4 className="text-[14px] text-yellow-500 ">
          You do not have any sportsBet
        </h4>
        <h4 className="text-[14px] text-yellow-500 my-2">
          Place some bets to start to view you betlist
        </h4>
        <button
          onClick={() => navigate("/")}
          className="bg-[#60991a] px-4 py-1 opacity-90  rounded-md hover:opacity-100 transition-all"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default EmpytBet;
