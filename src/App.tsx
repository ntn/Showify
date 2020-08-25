import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { getAccessToken } from "./utils/utils";
import traktService from "./services/trakt";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setToken(accessToken);
      traktService.setToken(accessToken);
    }
  }, []);

  return <div>{token ? <Home /> : <Login />}</div>;
};

export default App;
