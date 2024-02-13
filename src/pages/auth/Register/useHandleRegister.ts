import { toast } from "sonner";
import { SubmitHandler } from "react-hook-form";
import { FieldInputs } from "./RegisterForm";
import { useNavigation } from "../../../hooks/useNavigation";
import { AuthContext } from "../../../Context/Auth";
import { useContext } from "react";

export const useHandleRegister = () => {
  const Navigation = useNavigation();
  const { setIsAuthenticated }: any = useContext(AuthContext);

  const onSubmit: SubmitHandler<FieldInputs> = async (data) => {
    try {
      localStorage.setItem("phoneNumber", "0740774613");
      Navigation("/", true);
      setIsAuthenticated(true);
      toast.success("Account created In Succesfully");
    } catch (error) {
      if (!error.response) {
        toast.error("failed To contact server");
      } else {
        toast.error("An error occured please try again");
      }
    }
  };

  return onSubmit;
};
