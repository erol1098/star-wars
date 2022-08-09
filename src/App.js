import React from "react";
import { GlobalStyle, StyledHome } from "./components/styled-components/scHome";
import Home from "./pages/Home";
import image from "./assets/background.jpg";
const App = () => {
  return (
    <StyledHome image={image}>
      <GlobalStyle />
      <Home />
    </StyledHome>
  );
};
export default App;
