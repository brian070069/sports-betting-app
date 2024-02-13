import React from "react";

const HeaderNavigation = () => {
  const navigations = [
    {
      label: "soccer",
    },
    {
      label: "boxing",
    },
    {
      label: "Table Tennis",
    },
    {
      label: "Cricket",
    },
    {
      label: "basketball",
    },
    {
      label: "ice hockey",
    },
    {
      label: "rugby",
    },
    {
      label: "tennis",
    },
    {
      label: "handball",
    },
    {
      label: "volleyball",
    },
    {
      label: "e-soccer",
    },
    {
      label: "waterpool",
    },
    {
      label: "darts",
    },
    {
      label: "bandy",
    },
    {
      label: "american football",
    },
    {
      label: "Live",
    },
    {
      label: "Aviator",
    },
    {
      label: "Ligi Bigi",
    },
  ];

  return (
    <div>
      <div className="hidden md:flex headerBottom  flex-shrink-0  gap-4 text-white w-[70%]   ">
        {navigations.map((nav) => {
          return (
            <div
              key={nav.label}
              className="w-fit whitespace-nowrap capitalize py-2"
            >
              <h4 className="text-darkWhite  text-[15px] hover:text-white transition-all cursor-pointer  ">
                {nav.label}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderNavigation;
