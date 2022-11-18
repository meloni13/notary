import axios from "axios";
import { stringify } from "postcss";
import React, { useContext, useRef, useState } from "react";
// import user from "../../../Server/models/user";
import "./Login.css";
import image from "./right_img.jpg";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
// import user from "../../../Server/models/user";

// import "./app.js";
const Login = () => {
  const emailLoginRef = useRef();
  const passwordLoginRef = useRef();
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const usernameSignupRef = useRef();
  const emailSignupRef = useRef();
  const passwordSignupRef = useRef();
  const loginHandler = (event) => {
    event.preventDefault();
    // console.log(emailRef.current.value);
    const formData = {
      email: emailLoginRef.current.value,
      password: passwordLoginRef.current.value,
    };
    axios
      .post("http://localhost:3001/user/login", formData)
      .then((res) => {
        if (res.data.message == true) {
          ctx.userLogged = res.data.user;
          console.log(res.data);
          sessionStorage.setItem("userid", res.data.userid);
          console.log(ctx.userLogged);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("Error Occured");
        console.log(err);
      });
  };

  const signupHandler = (event) => {
    event.preventDefault();
    const formData = {
      username: usernameSignupRef.current.value,
      email: emailSignupRef.current.value,
      password: passwordSignupRef.current.value,
    };

    axios
      .post("http://localhost:3001/user/signup", formData)
      .then((res) => {
        // res.json();
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error Occured");
        console.log(err);
      });
  };

  return (
    <div className="bodyContainer">
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="form-content">
          <form
            onSubmit={(event) => loginHandler(event)}
            className="existingUser"
          >
            <div className="login-form">
              <div className="title">SignIn</div>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fa fa-envelope"></i>
                  <input
                    type="email"
                    ref={emailLoginRef}
                    id="userEmail"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fa fa-lock"></i>
                  <input
                    type="password"
                    ref={passwordLoginRef}
                    id="userPassword"
                    placeholder="Password"
                    required
                  />
                </div>
                {/* <div className="wrongDetails none">Invalid Credentials</div> */}
                <div className="forgot text">
                  <a href="#">Forgot Password</a>
                </div>
                <div className="button submit">
                  <input type="submit" value="Sign In" />
                </div>
                <div className="text login-text">
                  Don't have an account?
                  <a href="">
                    <br />
                    <label for="flip">SignUp Now</label>
                  </a>
                </div>
              </div>
            </div>
          </form>
          <form onSubmit={(event) => signupHandler(event)} className="newUser">
            <div className="signup-form">
              <div className="title">SignUp</div>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fa fa-user"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    ref={usernameSignupRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fa fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    ref={emailSignupRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fa fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    ref={passwordSignupRef}
                    required
                  />
                </div>
                <div className="button submit">
                  <input type="submit" value="Create Account" />
                </div>
                <div className="text sign-up-text">
                  Already have an account?
                  <a href="">
                    <br />
                    <label for="flip">SignIn Now</label>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
