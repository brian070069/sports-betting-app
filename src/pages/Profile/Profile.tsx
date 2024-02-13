import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import { BsPerson } from "react-icons/bs";
import Balances from "./componets/Balances";
import Deposit from "./componets/Deposit/Deposit";
import Withdraw from "./componets/Withdraw";
import Support from "./componets/Support";
import { useAuth } from "../../Context/Auth";

const Profile = () => {
  useAuth();
  const [AccoutBalance, setAccountBalance] = useState(0);
  const phonenumber = localStorage.getItem("phoneNumber");
  return (
    <div>
      <Header />

      <div className="px-3 flex flex-col mt-20 pb-24 max-w-[700px] mx-auto gap-4">
        <div className="flex flex-col items-center gap-2">
          <i className="bg-greenish p-2 rounded-full ">
            <BsPerson size={30} />
          </i>
          <p className="text-sm font-semibold">{phonenumber}</p>
        </div>
        <Balances
          AccountBalance={AccoutBalance}
          setAccountBalance={setAccountBalance}
        />
        <Deposit
          AccountBalance={AccoutBalance}
          setAccountBalance={setAccountBalance}
        />
        <Withdraw
          AccountBalance={AccoutBalance}
          setAccountBalance={setAccountBalance}
        />
        <Support />
      </div>
    </div>
  );
};

export default Profile;
