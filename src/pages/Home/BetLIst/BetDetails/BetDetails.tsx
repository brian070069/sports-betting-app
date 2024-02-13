import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { data } from "../../../../data/data";
import BetSlipHeader from "./BetSlipHeader";
import GamesChoosen from "./GamesChoosen";
import Header from "../../../../components/Header/Header";

const BetDetails = () => {
  const { id } = useParams();
  const [betList, setBetList] = useState<any>([]);

  useEffect(() => {
    const phoneNumber = localStorage.getItem("phoneNumber");
    const findUser: any = data.find((user: any) => user.id === phoneNumber);

    const findGame = findUser?.betSlips.find((bet) => bet.id === id);
    setBetList(findGame);
  }, [data]);

  return (
    <div>
      <Header />
      <div className="mt-20 max-w-[650px] px-2 mx-auto">
        <BetSlipHeader betList={betList} />
        <GamesChoosen betList={betList} />
      </div>
    </div>
  );
};

export default BetDetails;
