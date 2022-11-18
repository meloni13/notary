import React, { useState } from "react";
import { styles } from "../styles";
import { LoadingOutlined } from "@ant-design/icons";
import Avatar from "../Avatar";
import axios from "axios";

const EmailForm = (props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function getOrCreateUser(callback) {
    axios
      .put(
        "https://api.chatengine.io/users/",
        {
          username: "email",
          secret: "email",
          email: "email",
        },
        {
          headers: { "Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY },
        }
      )
      .then((r) => callback(r.data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  }

  function getOrCreateChat(callback) {
    axios
      .put(
        "https://api.chatengine.io/chats/",
        {
          usernames: ["Khushal Dhanuka", email],
          is_direct_chat: true,
        },
        {
          headers: { "Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY },
        }
      )
      .then((r) => callback(r.data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Sending Email", email);

    getOrCreateUser((user) => {
      getOrCreateChat((chat) => console.log("Success", chat));
    });
  }

  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: "100%",
          opacity: "1",
        },
      }}
    >
      <div style={{ height: "0px" }}>
        <div style={styles.stripe} />
      </div>

      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "0.33" : "0",
          },
        }}
      />
      <LoadingOutlined
        className="transition-5"
        style={{
          ...styles.loadingIcon,
          ...{
            position: "fixed",
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "1" : "0",
            fontSize: "82px",
            top: "calc(50%-41px)",
            left: "calc(50%-41px)",
          },
        }}
      />
      <div
        style={{ position: "absolute", height: "100%", textAlign: "center" }}
      >
        <Avatar
          style={{
            position: "relative",
            left: "90%",
            top: "10%",
          }}
        />

        <div style={{ ...styles.topText, ...{ left: "60%" } }}>
          Welcome to my <br /> Support
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            position: "relative",
            width: "200%",
            top: "19.75%",
            left: "10%",
          }}
        >
          <input
            style={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          ></input>
        </form>

        <div style={{ ...styles.bottomText, ...{ left: "60%" } }}>
          Enter your Email <br />
          to get Started.
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
