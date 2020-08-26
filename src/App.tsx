import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { getAccessToken } from "./utils/utils";
import traktService from "./services/trakt";

const App = () => {
  const [token, setToken] = useState("");
  const { SubMenu } = Menu;
  const { Header, Content, Footer } = Layout;
  const padding = {
    padding: 5,
  };

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setToken(accessToken);
      traktService.setToken(accessToken);
    }
  }, []);

  return (
    <Layout className="layout">
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link style={padding} to="/">
              home
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link style={padding} to="/history">
              history
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link style={padding} to="/recommendations">
              recommendations
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ height: "calc(100vh - 55px)" }}>
          <Switch>
            <Route path="/">{token ? <Home /> : <Login />}</Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Neethan</Footer>
    </Layout>
  );
};

export default App;
