import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ChangePasswordPage from "./Pages/ChangePassword";
import ICFPage from "./Pages/ICFPage";

import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import RegisterPatientPage from "./Pages/RegisterPatientPage";

import InfoPatientPage from "./Pages/InfoPatientPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"/sarapee-web"}>
      <App />

      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/changepassword" element={<ChangePasswordPage />}></Route>

        <Route
          path="/registerpatient"
          element={<RegisterPatientPage />}
        ></Route>
        <Route path="/icf" element={<ICFPage />}></Route>

        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>

        <Route path="/infopatient" element={<InfoPatientPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
