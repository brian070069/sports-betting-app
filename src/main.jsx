import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
import Auth from "./Context/Auth.tsx";
import HomeContextProvider, { HomeContext } from "./pages/Home/HomeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster richColors position="top-center" />
    <BrowserRouter>
      <Auth>
        <HomeContextProvider>
          <App />
        </HomeContextProvider>
      </Auth>
    </BrowserRouter>
  </React.StrictMode>
);
