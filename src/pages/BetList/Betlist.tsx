import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import EmpytBet from "./EmpytBet";
import { data } from "../../data/data";
import { useAuth } from "../../Context/Auth";

const Betlist = () => {
  useAuth();

  const [betSlip, setBetSlip] = useState([]);

  useEffect(() => {
    const phoneNumber = localStorage.getItem("phoneNumber");

    const findUser: any = data.find((user: any) => user.id === phoneNumber);

    if (findUser) {
      setBetSlip(findUser?.betSlips);
    }
  }, [data]);

  return (
    <div className="mt-20 lg:mt-28 max-w-[600px] mx-auto">
      <Header />
      {betSlip?.length <= 0 ? (
        <EmpytBet />
      ) : (
        <>
          <h4 className="text-center mb-3 text-lg  tracking-wide">Your Bets</h4>
          <div className=" flex flex-col gap-2 px-2">
            {betSlip?.length > 0 &&
              betSlip.map((betslip: any) => {
                const { betAmount, id, PossibleWin, totalOdds } = betslip;
                return (
                  <Link
                    to={`/mybets/${id}`}
                    key={id}
                    className="flex flex-col gap-1 bg-bgLightBlue rounded-lg px-2 py-2"
                  >
                    <div className="row justify-between font-medium">
                      <h4 className="uppercase ">#{id}</h4>
                      <h4 className="text-darkWhite font-normal">
                        kES {betAmount}
                      </h4>
                    </div>
                    <div className="row justify-between ">
                      <h4 className="text-sm font-normal text-green-500">
                        PossibleWin: sh {PossibleWin}
                      </h4>
                      <h4 className="text-sm text-yellow-400 capitalize">
                        totalOdds: {totalOdds}
                      </h4>
                    </div>
                    <div></div>
                  </Link>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Betlist;
