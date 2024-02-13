import React, { useContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiBookLine, RiNotification2Line } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HomeContext } from "../pages/Home/HomeContext";
import { data } from "../data/data";
import { toast } from "sonner";

const MobileNavigation = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [state, dispatch]: any = useContext(HomeContext);
  const navigate = useNavigate();

  const mobileLinks = [
    {
      label: "Home",
      icon: AiOutlineHome,
      path: "/",
      isActive: location.pathname === "/",
    },
    {
      label: "My Bets",
      icon: RiBookLine,
      path: "/mybets",
      isActive: location.pathname === "/mybets",
    },
    {
      label: "Profile",
      icon: BsPerson,
      path: "/profile",
      isActive: location.pathname === "/profile",
    },
    {
      label: "Notifications",
      path: "/notifications",
      icon: RiNotification2Line,
      isActive: location.pathname === "/notifications",
    },
  ];

  const handlePlaceBet = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const phoneNumber = localStorage.getItem("phoneNumber");

      if (!phoneNumber) {
        setLoading(false);
        navigate("/login");
        return;
      }

      const findUser: any = data?.find((user: any) => user?.id === phoneNumber);
      const hasEnoughBettingAmount =
        state?.betAmount < findUser?.accountBalance;

      if (!hasEnoughBettingAmount) {
        setLoading(false);
        toast.error("You do not have enough cash to place this bet");
        return;
      }

      dispatch({
        type: "default",
      });
      setLoading(false);
      toast.success("bet placed successfully");
    } catch (error) {
      setLoading(false);
      if (!error.response) {
        toast.error("failed to contact the server.");
      } else {
        toast.error("An error occured Please try again.");
      }
    }
  };

  return (
    <div className="block md:hidden fixed -bottom-[1px] right-0 left-0">
      {state?.choosenGamesList.length > 0 && (
        <div className="row justify-center">
          <button
            disabled={loading}
            onClick={handlePlaceBet}
            className={twMerge(
              "bg-yellow-500 text-black px-4 py-[3px] rounded-sm min-w-48",
              loading && "bg-slate-800 text-white"
            )}
          >
            {loading ? "placing bet...." : "place bet"}
          </button>
        </div>
      )}
      <div className="flex md:hidden row justify-between  py-3 px-2 bg-bgLightBlue">
        {mobileLinks.map((link) => {
          const { icon: Icon, label, isActive, path }: any = link;
          return (
            <div key={path}>
              <Link
                to={path}
                className={twMerge(
                  "flex flex-col items-center cursor-pointer",
                  isActive && "text-[#60991a]"
                )}
              >
                <Icon size={23} />
                <span className="font-medium">{label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
