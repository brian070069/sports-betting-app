import React, { useContext } from "react";
import PasswordInput from "../../../components/PasswordInput";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginValidationSchema } from "./LoginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "../../../components/InputError";
import { useHandleLogin } from "./useHandleLogin";
import SubmitButton from "../../../components/SubmitButton";
import { AuthContext } from "../../../Context/Auth";
import { useNavigate } from "react-router-dom";

export interface FieldInputs {
  LoginphoneNumber: string;
  password: string;
}

const LoginForm = () => {
  const onSubmit = useHandleLogin();
  const navigate = useNavigate();
  const { setIsAuthenticated }: any = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldInputs>({
    resolver: yupResolver(LoginValidationSchema),
  });

  const handleTryDemo = () => {
    localStorage.setItem("phoneNumber", "0740774613");
    setIsAuthenticated(true);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-sm text-darkWhite">
          Enter your Phone number and Password to Login.
        </p>
        <div className="flex flex-col gap-4 pt-1 pb-3">
          <div>
            <h4 className="font-medium text-base pb-1">Phone Number</h4>
            <input
              {...register("LoginphoneNumber")}
              type="text"
              placeholder="e.g. 07-40774613"
              className="mb-1"
            />
            <InputError message={errors.LoginphoneNumber?.message} />
          </div>
          <PasswordInput
            register={register}
            registerValue="password"
            message={errors.password?.message}
            label="Password"
          />
        </div>
        <div className="pt-2">
          <SubmitButton label="login" loading={isSubmitting} />
        </div>
      </form>
      <SubmitButton
        label="Try demo"
        loading={false}
        className="mt-2"
        handleSubmit={handleTryDemo}
      />
      <div className="row justify-center pt-4">
        <Link to="/register" className="text-[15px]">
          Don't have an Account? Register here
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
