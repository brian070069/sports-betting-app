import React, { useEffect } from "react";
import Modal from "./Modal";
import { BiWallet } from "react-icons/bi";
import { BsGift } from "react-icons/bs";
import { data } from "../../../data/data";

const Balances = ({ AccountBalance, setAccountBalance }) => {
  useEffect(() => {
    const phoneNumber = localStorage.getItem("phoneNumber");
    const findUser: any = data.find((user: any) => user.id === phoneNumber);

    if (findUser) {
      const accountBalance = findUser.accountBalance;
      setAccountBalance(accountBalance);
    }
  }, [data]);

  return (
    <div>
      <Modal>
        <div className="row gap-2 ">
          <span>
            <BiWallet size={30} />
          </span>
          <div className="flex flex-col gap-0">
            <p className="text-sm font-light">Balance</p>
            <h4 className="text-[15px] font-medium uppercase tracking-wide ">
              kES {AccountBalance}
            </h4>
          </div>
        </div>
        <div className="w-[2px] h-6 bg-main"></div>
        <div className="row gap-2">
          <span>
            <BsGift size={20} />
          </span>
          <div className="flex flex-col gap-0">
            <p className="text-sm font-light">Bonus</p>
            <h4 className="text-[15px] font-medium uppercase tracking-wide ">
              kES {10}
            </h4>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Balances;
