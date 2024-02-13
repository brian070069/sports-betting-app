import React from "react";
import Header from "../components/Header/Header";

const Notifications = () => {
  return (
    <div className=" px-2">
      <Header />
      <div className="mt-20 bg-bgLightBlue max-w-[400px] mx-auto h-20 row justify-center rounded-md">
        <h4 className="text-base text-yellow-500 text-center">
          Your Have no notifications
        </h4>
      </div>
    </div>
  );
};

export default Notifications;
