import React, { useContext, useEffect } from "react";
import { useFetch } from "../../../hooks/UseFetch";
import { fixturesUrl } from "../../../Services/BaseUrls";
import Game from "./Game";
import { HomeContext } from "../HomeContext";
import { HOMEACTIONS } from "../HomeReducer";

const Games = () => {
  const { data, isLoading } = useFetch(fixturesUrl);
  const [, dispatch]: any = useContext(HomeContext);

  useEffect(() => {
    dispatch({
      type: HOMEACTIONS.UPDATEGAMES,
      games: data,
    });
  }, [data]);

  return (
    <div className="flex flex-col gap-3  ">
      {isLoading ? (
        <div className="text-center pt-10 text-lg italic text-red-500">
          loading...
        </div>
      ) : (
        data.length > 0 &&
        data.map((fixture: any) => {
          return <Game key={fixture.id} fixture={fixture} />;
        })
      )}
    </div>
  );
};

export default Games;
