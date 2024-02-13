import React from "react";
import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import { RiBookLine } from "react-icons/ri";
import { RiProfileFill } from "react-icons/ri";

const AuthenticatedLinks = () => {
  const NavigationLinks = [
    {
      Label: "Notifications",
      path: "/notifications",
      icon: RiNotification2Line,
    },
    {
      Label: "My Bets",
      path: "/mybets",
      icon: RiBookLine,
    },
    {
      Label: "Profile",
      path: "/profile",
      icon: RiProfileFill,
    },
  ];

  return (
    <div className="row">
      <div className="hidden md:flex gap-5 mr-8">
        {NavigationLinks.map((link) => {
          const { icon: Icon, Label, path } = link;
          return (
            <Link
              to={path}
              className="row gap-1 tracking-wide text-[15px] opacity-80 hover:opacity-100 transition-colors"
              key={Label}
            >
              <Icon size={20} />
              <span>{Label}</span>
            </Link>
          );
        })}
      </div>
      <button className="bg-bgYellow   text-black text-sm py-1  px-3 capitalize rounded-md font-medium opacity-95 hover:opacity-100 transition-all">
        Deposit
      </button>
    </div>
  );
};

export default AuthenticatedLinks;
