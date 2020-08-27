import React from "react";
import { Button } from "antd";
import logo from "../images/trakt.png";

const Login = () => {
  const loginUrl =
    process.env.env === "prod"
      ? "http://fierce-woodland-56626.herokuapp.com/login"
      : "http://localhost:8080/login";

  return (
    <div>
      <br />
      <Button type="primary" size="large" shape="round" block danger>
        <a href={loginUrl} style={{ color: "white" }}>
          Connect with Trakt.tv
        </a>
        <img src={logo} alt="trakt logo" width="25"></img>
      </Button>
    </div>
  );
};

export default Login;
