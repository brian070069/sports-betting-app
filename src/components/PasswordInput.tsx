import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useToggle } from "../hooks/useToggle";
import InputError from "./InputError";

interface PasswordInputProps {
  register: any;
  registerValue: string;
  message: string | undefined;
  label: string;
}

const PasswordInput = ({
  register,
  registerValue,
  message,
  label,
}: PasswordInputProps) => {
  const { toggleValue: showPassword, toggle } = useToggle(false);

  return (
    <div>
      <h4 className="font-medium text-base pb-1">{label}</h4>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...register(registerValue)}
        />
        <InputError message={message} />
        <button
          type="button"
          onClick={toggle}
          className="absolute right-3 top-0 translate-y-[50%] "
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </button>
      </div>
    </div>
  );
};
export default PasswordInput;
