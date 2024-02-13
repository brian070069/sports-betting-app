import Login from "./pages/auth/Login/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/auth/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Notifications from "./pages/Notifications";
import Betlist from "./pages/BetList/Betlist";
import MobileNavigation from "./components/MobileNavigation";
import BetDetails from "./pages/Home/BetLIst/BetDetails/BetDetails";

function App() {
  const location = useLocation();
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/mybets">
          <Route index element={<Betlist />} />
          <Route path=":id" element={<BetDetails />} />
        </Route>
      </Routes>
      {location.pathname === "/login" ||
        (location.pathname === "/register" ? "" : <MobileNavigation />)}
    </div>
  );
}

export default App;
