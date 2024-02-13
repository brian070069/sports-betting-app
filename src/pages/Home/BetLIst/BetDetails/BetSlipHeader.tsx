import React from "react";
import { RxArrowLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const BetSlipHeader = ({ betList }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        <div className="row font-bold pb-2">
          <RxArrowLeft
            onClick={() => navigate(-1)}
            size={20}
            className="cursor-pointer transition-all"
          />
          <h4 className="flex flex-1 gap-1 justify-center text-darkWhite font-medium">
            <span>Game Id:</span>
            <span>#{betList?.id}</span>
          </h4>
        </div>
        <div className="row justify-between text-yellow-400 text-[14px] py-2">
          <div className="row gap-1">
            <span>Total Odds:</span>
            <span className="font-medium">{betList?.totalOdds}</span>
          </div>
          <div className="row gap-1">
            <span>Bet Amount:</span>
            <span className="font-medium">KES {betList?.betAmount}</span>
          </div>
        </div>
        <div className="row text-[14px] font-medium gap-1 ">
          <span>Possible Win:</span>
          <span>{betList?.PossibleWin}</span>
        </div>
      </div>
    </div>
  );
};

export default BetSlipHeader;
