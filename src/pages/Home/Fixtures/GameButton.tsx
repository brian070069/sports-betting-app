import React, { useContext, useEffect } from "react";
import { HomeContext } from "../HomeContext";
import { HOMEACTIONS } from "../HomeReducer";

const GameButton = ({ fixture, id, selectedButton, setSelectedButton }) => {
  const [state, dispatch]: any = useContext(HomeContext);
  const { teams, odds } = fixture;
  const { homeOdds, draw, awayOdds } = odds;
  const oddsToDisplay =
    id === "home" ? homeOdds : id === "away" ? awayOdds : draw;

  const updateChoosenGames = (choosenTeam, choosenOdds) => {
    const choosenGame = {
      id: fixture.id,
      teams,
      choosenTeam,
      choosenOdds,
    };

    const isGamePresent = state?.choosenGamesList.find(
      (game) => game.id === fixture.id
    );

    if (isGamePresent) {
      const remainingGames = state?.choosenGamesList.filter(
        (game) => game.id !== fixture.id
      );
      dispatch({
        type: HOMEACTIONS.UPDATECHOOSENGAMES,
        payload: [...remainingGames, choosenGame].reverse(),
      });
      dispatch({
        type: HOMEACTIONS.UPDATEPAYOUTS,
        newOdds: choosenOdds,
      });
      return;
    }

    const updateGamesList = [...state?.choosenGamesList, choosenGame].reverse();

    dispatch({
      type: HOMEACTIONS.UPDATECHOOSENGAMES,
      payload: updateGamesList,
    });
    dispatch({
      type: HOMEACTIONS.UPDATEPAYOUTS,
      newOdds: choosenOdds,
    });
  };

  const choosenGameToBet = (e) => {
    const { value, id } = e.target;

    //was clicked earlier
    if (selectedButton == id) {
      let newOdds = 0;
      const remainingGames = state?.choosenGamesList
        .filter((game) => {
          newOdds = newOdds + game.choosenOdds;
          return game.id !== fixture.id;
        })
        .reverse();
      dispatch({
        type: HOMEACTIONS.UPDATECHOOSENGAMES,
        payload: remainingGames,
      });
      dispatch({
        type: HOMEACTIONS.UPDATEPAYOUTS,
        newOdds: newOdds * 0.01,
      });
      setSelectedButton("");
      return;
    }

    // new click
    if (id === "home") {
      setSelectedButton("home");
      updateChoosenGames(teams.homeTeam, odds.homeOdds);
    }
    if (id === "draw") {
      setSelectedButton("draw");
      updateChoosenGames("draw", odds.draw);
    }
    if (id === "away") {
      setSelectedButton("away");
      updateChoosenGames(teams.awayTeam, odds.awayOdds);
    }
  };

  useEffect(() => {
    if (state.choosenGamesList.length <= 0) {
      setSelectedButton("");
    }
  }, [state]);

  return (
    <div>
      <button
        onClick={choosenGameToBet}
        id={id}
        value={oddsToDisplay}
        className={`w-[60px] lg:w-[70px] py-1 rounded-full  ${
          selectedButton === id ? "bg-yellow-500 text-slate-950" : "bg-gray-800"
        }`}
      >
        {oddsToDisplay}
      </button>
    </div>
  );
};

export default GameButton;
