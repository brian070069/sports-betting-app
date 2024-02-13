import React from "react";
import Header from "../../components/Header/Header";
import Fixtures from "./Fixtures/Fixtures";
import BetList from "./BetLIst/BetList";
import HomeNavigation from "./HomeNavigation/HomeNavigation";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative flex flex-row justify-between gap-4 mt-24 pb-28 lg:pb-5">
        <HomeNavigation />
        <Fixtures />
        <BetList />
      </div>
    </div>
  );
};

export default Home;
