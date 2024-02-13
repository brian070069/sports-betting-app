import React from "react";
import { useNavigation } from "../../../hooks/useNavigation";

const NotAuthenticatedLinks = () => {
  const Navigation = useNavigation();

  return (
    <div className="row gap-6 capitalize text-sm font-medium ">
      <button onClick={() => Navigation("/login")} className="text-textGreen">
        Login
      </button>
      <button
        onClick={() => Navigation("/register")}
        className="bg-greenish opacity-95 py-[5px] px-3 tracking-wide rounded-md  font-semibold text-[13px]  hover:opacity-100"
      >
        Register
      </button>
    </div>
  );
};

export default NotAuthenticatedLinks;
