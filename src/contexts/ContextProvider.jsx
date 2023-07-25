import { createContext, useEffect, useState } from "react";
import React from "react";

export const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("ACCESS_USER"))
  );
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token) => {
    _setToken(token);
  };

  useEffect(() => {
    if (token && user) {
      localStorage.setItem("ACCESS_TOKEN", token);
      localStorage.setItem("ACCESS_USER", JSON.stringify(user));
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("ACCESS_USER");
    }
  }, [token, user]);

  return (
    <StateContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </StateContext.Provider>
  );
};
