import React from "react";
import { BiFootball } from "react-icons/bi";

const FixturesTime = () => {
  return (
    <div className="text-[12px] text-darkWhite row justify-between">
      <div className="  row gap-1 pb-[2px]">
        <span>
          <BiFootball />
        </span>
        <p>Europe . Premier League</p>
      </div>
      <div>06/02,22:45</div>
    </div>
  );
};

export default FixturesTime;
