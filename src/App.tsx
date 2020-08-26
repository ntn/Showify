import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { getAccessToken } from "./utils/utils";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Watchlist from "./components/Watchlist";
import AllWatched from "./components/AllWatched";
import Recommendations from "./components/Recommendations";
import Stats from "./components/Stats";
import traktService from "./services/trakt";

const App = () => {
  const [token, setToken] = useState("");
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
          <Menu.Item key="4">
            <Link style={padding} to="/watchlist">
              watchlist
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link style={padding} to="/stats">
              stats
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ height: "calc(100vh - 55px)" }}>
          <Switch>
            <Route path="/history">
              {token ? <AllWatched /> : <Redirect to="/login" />}
            </Route>
            <Route path="/recommendations">
              {token ? <Recommendations /> : <Redirect to="/login" />}
            </Route>
            <Route path="/watchlist">
              {token ? <Watchlist /> : <Redirect to="/login" />}
            </Route>
            <Route path="/stats">
              {token ? <Stats /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              {token ? <Home /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Neethan</Footer>
    </Layout>
  );
};

export default App;
