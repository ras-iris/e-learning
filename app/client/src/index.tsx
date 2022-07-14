import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/scss/index.scss";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";
import ResetPwd from "./pages/ResetPwd";
import Page404 from "./pages/Page404";
import Confirmation from "./pages/confirmation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-password" element={<ResetPwd />} />
        <Route path="/" element={<App />} />
        <Route  path="confirmation" element={< Confirmation/>}/>

        {/* 404 Page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
