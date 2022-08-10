import React from "react";
import {
  StyledLogin,
  EnterButton,
} from "../components/styled-components/scHome";

const Login = ({ setIsLogin, onSide }) => {
  return (
    <StyledLogin>
      <h1>star wars</h1>
      <div>
        <EnterButton
          bgColor="#FF0C08"
          color="#000"
          onClick={() => {
            onSide(false);
            setIsLogin();
          }}
        >
          Dark Side
        </EnterButton>
        <EnterButton
          bgColor="#32e246"
          color="#fff"
          onClick={() => {
            onSide(true);
            setIsLogin();
          }}
        >
          Light Side
        </EnterButton>
      </div>
    </StyledLogin>
  );
};

export default Login;
