import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterValidationSchema } from "./RegisterFormValidation";
import PasswordInput from "../../../components/PasswordInput";
import SubmitButton from "../../../components/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import InputError from "../../../components/InputError";
import { useHandleRegister } from "./useHandleRegister";
import { AuthContext } from "../../../Context/Auth";

export interface FieldInputs {
  RegisterphoneNumber: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const onSubmit = useHandleRegister();
  const navigate = useNavigate();
  const { setIsAuthenticated }: any = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldInputs>({
    resolver: yupResolver(RegisterValidationSchema),
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
          Fill in the details below to create you account.
        </p>
        <div className="flex flex-col gap-4 pt-1 pb-3">
          <div>
            <h4 className="font-medium text-base pb-1">Phone Number</h4>
            <input
              {...register("RegisterphoneNumber")}
              type="text"
              placeholder="e.g. 07-40774613"
            />
            <InputError message={errors.RegisterphoneNumber?.message} />
          </div>
          <PasswordInput
            register={register}
            registerValue="password"
            message={errors.password?.message}
            label="Password"
          />
          <PasswordInput
            register={register}
            registerValue="confirmPassword"
            message={errors.confirmPassword?.message}
            label="Confirm Password"
          />
        </div>
        <div className="pt-2">
          <SubmitButton label="Register" loading={isSubmitting} />
        </div>
        <SubmitButton
          label="Try demo"
          loading={false}
          className="mt-2"
          handleSubmit={handleTryDemo}
        />
        <div className="row justify-center pt-4">
          <Link to="/login" className="text-[15px]">
            Already have an? Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
