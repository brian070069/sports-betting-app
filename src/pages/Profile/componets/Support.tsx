import React, { useContext } from "react";
import Modal from "./Modal";
import { toast } from "sonner";
import { AuthContext } from "../../../Context/Auth";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const { setIsAuthenticated }: any = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSingOut = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/");
    toast.success("LoggedOut successfully");
  };

  return (
    <div>
      <div className="pb-2 pl-4">
        <h4 className="font-semibold">Other Info & Preferences</h4>
        <p className="text-sm text-darkWhite">
          Information that is critical in managing your accout
        </p>
      </div>
      <Modal>
        <div>
          <div>
            <button
              onClick={handleSingOut}
              className="text-textGreen text-[15px] border-b-2 border-[#60991a] hover:opacity-90 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Support;
