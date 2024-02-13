import React from "react";
import { TailSpin } from "react-loader-spinner";
import { twMerge } from "tailwind-merge";

interface SubmitButtonProps {
  loading: boolean;
  label: string;
  className?: string;
  handleSubmit?: () => void;
}

const SubmitButton = ({
  loading,
  label,
  handleSubmit,
  className,
}: SubmitButtonProps) => {
  return (
    <button
      disabled={loading}
      onClick={handleSubmit}
      className={twMerge(
        "row justify-center bg-greenish w-full rounded-md py-2 opacity-95 hover:opacity-100",
        loading && "bg-gray-700",
        className
      )}
    >
      {loading ? (
        <TailSpin
          height="30"
          width="30"
          color="red"
          ariaLabel="tail-spin-loading"
          radius="0.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        label
      )}
    </button>
  );
};

export default SubmitButton;
