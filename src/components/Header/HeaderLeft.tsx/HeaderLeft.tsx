import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigation } from "../../../hooks/useNavigation";

const HeaderLeft = () => {
  const Navigation = useNavigation();

  return (
    <div className="row gap-3 bg-main">
      <div>
        <button className="pt-2">
          <RxHamburgerMenu size={23} />
        </button>
      </div>
      <div
        onClick={() => Navigation("/")}
        className="w-[80px] cursor-pointer transition"
      >
        <img src="Logo.png" alt="logo" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default HeaderLeft;
