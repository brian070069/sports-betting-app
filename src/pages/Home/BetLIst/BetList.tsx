import React, { useContext, useEffect } from "react";
import SingleBetList from "./SingleBetList";
import PlaceBet from "./PlaceBet";
import { HomeContext } from "../HomeContext";

const BetList = () => {
  const [state, dispatch]: any = useContext(HomeContext);
  const { choosenGamesList } = state;

  useEffect(() => {
    if (state?.choosenGamesList.length <= 0) {
      dispatch({
        type: "defult",
      });
    }
  }, []);

  return (
    <div className="w-96  hidden md:flex sticky top-20 overflow-y-scroll  h-[85vh]">
      <div className="w-full px-3">
        {state?.choosenGamesList.length > 0 ? (
          <div>
            <div className="row justify-between text-sm text-textGreen px-3">
              <button
                onClick={() => {
                  dispatch({
                    type: "default",
                  });
                }}
              >
                Remove all
              </button>
              <h4 className="text-white text-base font-medium">
                {state?.choosenGamesList.length}
              </h4>
            </div>
            <div className="mt-2 max-h-[300px] overflow-y-scroll px-1 flex flex-col gap-2">
              {choosenGamesList.length > 0 &&
                choosenGamesList.map((game) => {
                  return <SingleBetList key={game.id} game={game} />;
                })}
            </div>
            <PlaceBet />
          </div>
        ) : (
          <div className="bg-bgLightBlue h-full text-center rounded-md pt-5">
            <h4 className="capitalize font-semibold text-lg">
              You betSlip is empty
            </h4>
            <h4 className="mt-4">Choose some game to view slip</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default BetList;
