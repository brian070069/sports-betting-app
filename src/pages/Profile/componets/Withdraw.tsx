import React, { useState } from "react";
import Modal from "./Modal";
import { toast } from "sonner";
import { data } from "../../../data/data.ts";

const Withdraw = ({ AccountBalance, setAccountBalance }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [withdrawValue, setWithdrawValue] = useState("");

  const handlewidthdraw = async () => {
    const phoneNumber = localStorage.getItem("phoneNumber");
    const findUser: any = data.find((user: any) => user.id === phoneNumber);

    try {
      setIsLoading(true);
      const WithDrawValueToInterger = Number(withdrawValue);
      const belowWithdrawalLimit = WithDrawValueToInterger < 50;
      const aboveWithdrawalLimit = WithDrawValueToInterger > 300000;
      const insufficientBalanceAccount =
        +findUser.accountBalance < WithDrawValueToInterger;

      if (!WithDrawValueToInterger) {
        toast.error("invalid amount.Please enter a valid amount");
        setIsLoading(false);
        return;
      }

      if (belowWithdrawalLimit) {
        toast.error("can't withdrawless that KES 50");
        setIsLoading(false);
        return;
      }

      if (aboveWithdrawalLimit) {
        toast.error("can't withdraw more that  KES 3000000");
        setIsLoading(false);
        return;
      }

      if (insufficientBalanceAccount) {
        toast.error(
          `insufficient kes to withdraw KES ${withdrawValue} your account balance is KES ${findUser?.accountBalance}`
        );
        setIsLoading(false);
        return;
      }

      const newAccountBalance = +AccountBalance - +withdrawValue;
      setIsLoading(false);
      setAccountBalance(newAccountBalance);
      toast.success(`withdrawn successfully`);
    } catch (error) {
      if (!error.response) {
        setIsLoading(false);
        toast.error("failed to contact server");
      } else {
        toast.error("failed to contact server please try again");
      }
    }
  };

  return (
    <Modal>
      <div className="w-full">
        <div className="pb-3">
          <h4 className="text-[15px] font-medium">Withdraw</h4>
          <p className="text-sm text-darkWhite">Withdraw from your account.</p>
        </div>
        <div>
          <div className="w-full">
            <div>
              <input
                value={withdrawValue}
                onChange={(e) => setWithdrawValue(e.target.value)}
                type="text"
                className="bg-main placeholder:text-sm h-[42px]"
                placeholder="Enter amount to deposit"
              />
              <p className="text-sm text-darkWhite mt-1">
                Withdrawal Limit:Mininum KES50,Maximum 300,000.
              </p>
            </div>
            <button
              disabled={isLoading}
              onClick={handlewidthdraw}
              className={`bg-greenish px-10 text-sm font-sm py-[6px] rounded-sm mt-3 hover:opacity-90 ${
                isLoading && "bg-gray-800"
              }`}
            >
              {isLoading ? "withdrawing...." : "Withdraw"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Withdraw;
