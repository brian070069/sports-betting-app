import { toast } from "sonner";
import { SubmitHandler } from "react-hook-form";
import { FieldInputs } from "./LoginForm";
import { useNavigation } from "../../../hooks/useNavigation";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Auth";

export const useHandleLogin = () => {
  const Navigation = useNavigation();
  const { setIsAuthenticated }: any = useContext(AuthContext);

  const onSubmit: SubmitHandler<FieldInputs> = async () => {
    try {
      localStorage.setItem("phoneNumber", "0740774613");
      Navigation("/", true);
      setIsAuthenticated(true);
      toast.success("Logged In Succesfully");
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
