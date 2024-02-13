import React from "react";
import { BiFootball } from "react-icons/bi";
import { BiTable } from "react-icons/bi";
import { BiCricketBall } from "react-icons/bi";
import { BiBasketball } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";

const HomeNavigation = () => {
  const navigations = [
    {
      label: "soccer",
      icon: BiFootball,
    },
    {
      label: "boxing",
      icon: BiTable,
    },
    {
      label: "Table Tennis",
      icon: BiRedo,
    },
    {
      label: "Cricket",
      icon: BiCricketBall,
    },
    {
      label: "basketball",
      icon: BiBasketball,
    },
    {
      label: "ice hockey",
      icon: BiCricketBall,
    },
    {
      label: "rugby",
      icon: BiFootball,
    },
    {
      label: "tennis",
      icon: BiRedo,
    },
    {
      label: "handball",
      icon: BiFootball,
    },
    {
      label: "volleyball",
      icon: BiTable,
    },
    {
      label: "e-soccer",
      icon: BiRedo,
    },
    {
      label: "waterpool",
      icon: BiFootball,
    },
    {
      label: "darts",
      icon: BiTable,
    },
    {
      label: "bandy",
      icon: BiCricketBall,
    },
    {
      label: "american football",
      icon: BiRedo,
    },
    {
      label: "Live",
      icon: BiBasketball,
    },
    {
      label: "Aviator",
      icon: BiRedo,
    },
    {
      label: "Ligi Bigi",
      icon: BiTable,
    },
  ];
  return (
    <div className="w-56 hidden lg:flex flex-col gap-2 px-3 sticky top-24 overflow-y-scroll  h-[85vh]">
      {navigations.map((navigation) => {
        const { icon: Icon, label } = navigation;
        return (
          <div
            key={label}
            className="row gap-2 py-1  capitalize cursor-pointer transition-all"
          >
            <Icon size={20} />
            <h4 className="text-[14px] text-darkWhite hover:text-white">
              {label}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default HomeNavigation;
