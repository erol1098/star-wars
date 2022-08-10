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
          bgColor="#DCF8FB"
          color="#000"
          borColor="360"
          // borColor="#d90502"
          font="Star Jedi"
          onClick={() => {
            onSide(false);
            setIsLogin();
          }}
        >
          sith order
        </EnterButton>
        <EnterButton
          bgColor="#E3FFFF"
          color="#000"
          borColor="195"
          font="Star Jedi"
          onClick={() => {
            onSide(true);
            setIsLogin();
          }}
        >
          jedi order
        </EnterButton>
      </div>
    </StyledLogin>
  );
};

export default Login;
