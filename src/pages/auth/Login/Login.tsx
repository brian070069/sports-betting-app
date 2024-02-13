import React from "react";
import Header from "../../../components/Header/Header";
import LoginForm from "./LoginForm";
import FormHeader from "../components/FormHeader";

const Login = () => {
  return (
    <div className="px-3">
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="max-w-[500px] mx-auto my-10 lg:my-28 ">
        <FormHeader label={"Login"} />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
