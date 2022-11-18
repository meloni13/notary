import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
// import ChatBot from "../../components/chatBot/ChatBot";
import SupportEngine from "../../components/SupportEngine";

const Header = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text" style={{ color: "white" }}>
          Get your document legally notarized in minutes
        </h1>
        <p>
          No matter the device, time of day or location, we have notaries ready
          to complete your notary request!
        </p>

        <div className="gpt3__header-content__input">
          <button type="button" onClick={ctx.onOverlay}>
            Upload Document
          </button>
          {/* <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>*/}
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
        <SupportEngine />
      </div>
    </div>
  );
};

export default Header;
