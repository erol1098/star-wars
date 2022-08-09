import React from "react";
import {
  StyledLogin,
  EnterButton,
} from "../components/styled-components/scHome";

const Login = ({ setIsLogin }) => {
  return (
    <StyledLogin>
      <h1>Choose Your Side</h1>
      <div>
        <EnterButton
          bgColor="#FF0C08"
          color="#000"
          onClick={() => setIsLogin()}
        >
          Dark Side
        </EnterButton>
        <EnterButton
          bgColor="#32e246"
          color="#fff"
          onClick={() => setIsLogin()}
        >
          Light Side
        </EnterButton>
      </div>
    </StyledLogin>
  );
};

export default Login;
