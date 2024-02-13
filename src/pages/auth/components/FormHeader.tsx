import React from "react";
import { BiArrowFromRight } from "react-icons/bi";

const FormHeader = ({ label }) => {
  return (
    <div>
      <div className="row">
        <button className=" ">
          <BiArrowFromRight size={22} />
        </button>
        <h4 className="flex-1 text-center text-base font-medium capitalize">
          {label}
        </h4>
      </div>
      <div className="w-[100px] py-7">
        <img src="Logo.png" alt="Logo" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default FormHeader;
