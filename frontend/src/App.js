import React, { useContext } from "react";

import AllComponents from "./AllComponents";

import "./App.css";

import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
// import UserMain from "./userComponents/userMain/UserMain";

const App = () => {
  // const ctx = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<AllComponents />}></Route>
      </Routes>
    </div>
  );
};

export default App;
