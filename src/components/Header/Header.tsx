import React from "react";
import HeaderLeft from "./HeaderLeft.tsx/HeaderLeft";
import HeaderRight from "./HeaderRight.tsx/HeaderRight";
import { useLocation } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 right-0 top-0 px-5  py-2  z-50  bg-main ">
      <div className="row justify-between ">
        <HeaderLeft />
        <HeaderRight />
      </div>
      {location?.pathname === "/" && <HeaderNavigation />}
      {location?.pathname === "/mybets" && <HeaderNavigation />}
    </div>
  );
};

export default Header;
