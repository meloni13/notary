import React, { useState } from "react";

const AuthContext = React.createContext({
  isOverlay: false,
  onOverlay: () => {},
  noOverlay: () => {},
  userLogged: "",
  setUserLogged: () => {},
});

export const AuthContextProvider = (props) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState("");

  const overlayFunc = () => {
    console.log(true);
    setIsOverlay(true);
  };

  const noOverlay = () => {
    setIsOverlay(false);
  };

  const setUser = (user) => {
    setUserLoggedIn(user);
  };

  return (
    <AuthContext.Provider
      value={{
        isOverlay: isOverlay,
        onOverlay: overlayFunc,
        noOverlay: noOverlay,
        userLogged: userLoggedIn,
        setUserLogged: setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
