import React from "react";

interface InputErrorProps {
  message: string | undefined;
}

const InputError = ({ message }: InputErrorProps) => {
  return <div className="text-textRed text-[14px] font-medium">{message}</div>;
};

export default InputError;
