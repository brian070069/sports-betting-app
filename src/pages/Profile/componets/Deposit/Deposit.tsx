import React, { useState } from "react";
import { toast } from "sonner";
import Modal from "../Modal";

const Deposit = ({ AccountBalance, setAccountBalance }) => {
  const fixedDeposits = ["100", "200", "500", "1000"];
  const [isLoading, setIsLoading] = useState(false);
  const [depostValue, setDepositValue] = useState("");

  const handleClick = (e) => {
    setDepositValue(e.target.value);
  };

  const deposit = async () => {
    const phoneNumber = localStorage.getItem("phoneNumber");

    try {
      setIsLoading(true);
      const depositValueToInterger = Number(depostValue);

      if (!depostValue) {
        toast.error("cannot deposit nothing.Please enter an amount");
        setIsLoading(false);
        return;
      }

      if (!depositValueToInterger) {
        toast.error("Please enter a valid amount");
        setIsLoading(false);
        return;
      }

      if (+depostValue < 10) {
        toast.error("can't deposit less that KES 10");
        setIsLoading(false);
        return;
      }

      const newAccountBalance = +AccountBalance + +depostValue;
      setAccountBalance(newAccountBalance);
      toast.success("Deposited succesfully");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (!error.response) {
        toast.error("failed to contact server");
      } else {
        toast.error("failed to contact server please try again");
      }
    }
  };

  return (
    <Modal>
      <div className="w-full">
        <div>
          <h4 className="text-[15px] font-medium">Deposit</h4>
          <p className="text-sm text-darkWhite">Send money into your account</p>
        </div>
        <div>
          <div className="row gap-2 py-4">
            {fixedDeposits.map((amount) => {
              return (
                <button
                  key={amount}
                  onClick={handleClick}
                  value={amount}
                  className="bg-gray-600 px-3 py-[5px] rounded-full font-semibold text-sm "
                >
                  +{amount}
                </button>
              );
            })}
          </div>
          <div className="w-full">
            <div>
              <input
                value={depostValue}
                onChange={(e) => setDepositValue(e.target.value)}
                type="text"
                className="bg-main placeholder:text-sm h-[42px]"
                placeholder="Enter amount to deposit"
              />
              <p className="text-sm text-darkWhite mt-1">Minimum KES10</p>
            </div>
            <button
              disabled={isLoading}
              onClick={deposit}
              className={`bg-greenish px-10 text-sm font-sm py-[6px] rounded-sm mt-3 hover:opacity-90 ${
                isLoading && "bg-gray-800"
              }`}
            >
              {isLoading ? "depositing...." : "deposit"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Deposit;
