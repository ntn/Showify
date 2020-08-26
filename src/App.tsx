import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { getAccessToken } from "./utils/utils";
import traktService from "./services/trakt";

const App = () => {
  const [token, setToken] = useState("");
  const { Header, Content, Footer } = Layout;

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setToken(accessToken);
      traktService.setToken(accessToken);
    }
  }, []);

  return (
    <Layout className="layout">
      <Header>Test</Header>
      <Content style={{ padding: "0 50px" }}>
        {token ? <Home /> : <Login />}
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Neethan</Footer>
    </Layout>
  );
};

export default App;
