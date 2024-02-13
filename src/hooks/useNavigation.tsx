import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const Navigation = (page: string, rep?: boolean) => {
    navigate(page, { replace: rep });
  };

  return Navigation;
};
