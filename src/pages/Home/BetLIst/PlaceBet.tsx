import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../HomeContext";
import { HOMEACTIONS } from "../HomeReducer";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

const PlaceBet = () => {
  const [state, dispatch]: any = useContext(HomeContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [betAmount, setBetAmount] = useState(150);

  const handleAmountChange = (e) => {
    setBetAmount(e.target.value);
    dispatch({
      type: HOMEACTIONS.CHANGEBETAMOUNT,
      betAmount: betAmount,
    });
  };

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

      if (state?.betAmount <= 0) {
        setLoading(false);
        toast.error("Please enter a valid amount");
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

  useEffect(() => {
    dispatch({
      type: HOMEACTIONS.CHANGEBETAMOUNT,
      betAmount: betAmount,
    });
  }, [betAmount]);

  return (
    <div>
      <div className="border-t-[1px] border-gray-700 mt-3 pt-2 ">
        <h4 className="row justify-between">
          <span className="font-light text-darkWhite capitalize">Balance</span>
          <span className="font-medium text-sm">KES 30</span>
        </h4>
        <h4 className="row justify-between">
          <span className="font-light text-darkWhite capitalize">
            total odds
          </span>
          <span className="font-medium text-sm">{state?.totalOdds}</span>
        </h4>
        <h4 className="row justify-between">
          <span className="font-light text-darkWhite capitalize">
            Final Payout
          </span>
          <span className="font-medium text-sm">KES {state?.finalPayOut}</span>
        </h4>
      </div>
      <div className="pt-3">
        <input
          value={betAmount}
          onChange={handleAmountChange}
          type="text"
          placeholder="Enter amount"
        />
        <button
          onClick={handlePlaceBet}
          disabled={loading}
          className={twMerge(
            "bg-yellow-400 w-full text-black py-2 mt-4 rounded-md ",
            loading && "bg-gray-700"
          )}
        >
          {loading ? "placing bet..." : "place bet"}
        </button>
      </div>
    </div>
  );
};

export default PlaceBet;
