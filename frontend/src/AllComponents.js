import React, { useContext, useState, useEffect } from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";
import AuthContext from "./store/auth-context";
import OverlayModular from "./components/Overlay/OverlayModular";

const AllComponents = () => {
  const [uploadFile, setUploadFile] = useState(false);
  const ctx = useContext(AuthContext);

  const fileHandler = () => {
    setUploadFile(true);
  };

  const okayHandler = () => {
    setUploadFile(false);
  };

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        {ctx.isOverlay && (
          <OverlayModular fileHandler={fileHandler} onCLickOkay={okayHandler} />
        )}
        <Header />
      </div>
      <Brand />
      <WhatGPT3 uploadFile={uploadFile} />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default AllComponents;
