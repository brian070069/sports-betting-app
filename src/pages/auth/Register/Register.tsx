import React from "react";
import FormHeader from "../components/FormHeader";
import RegisterForm from "./RegisterForm";
import Header from "../../../components/Header/Header";

const Register = () => {
  return (
    <div className="px-3">
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="max-w-[500px] mx-auto my-10 lg:my-28  ">
        <FormHeader label={"Register"} />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
