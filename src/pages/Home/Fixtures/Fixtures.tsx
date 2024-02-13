import React from "react";
import FixturesSides from "./FixturesSides";
import Games from "./Games";
import Promotions from "./Promotions";

const Fixtures = () => {
  return (
    <div className=" flex-1 px-2 lg:px-0">
      <Promotions />
      <FixturesSides />
      <Games />
    </div>
  );
};

export default Fixtures;
