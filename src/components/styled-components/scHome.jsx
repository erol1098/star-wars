import styled from "styled-components";
import Background from "../../assets/background.jpg";
import Enter from "../../assets/enter.jpg";
import { createGlobalStyle } from "styled-components";
import Starjedi from "../../assets/fonts/starjedi/Starjedi.ttf";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
  @font-face {
    font-family: 'Star Jedi';
    src: url(${Starjedi});
   
  }

`;

export const StyledHome = styled.main`
  width: 100%;
  height: 100vh;
  background: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
`;

export const StyledTable = styled.table`
  font-family: "Star Jedi";
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  width: 80%;
  caption-side: top;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  td,
  th {
    border: none;
  }

  td {
    padding: 5px 10px;
    text-align: center;
    padding: 1rem 0;
  }
  thead {
    display: block;
    width: 100%;
  }
  tbody {
    height: 23rem;
    display: block;
    width: 100%;
    overflow: auto;
    font-size: 0.9rem;
  }

  tbody tr {
    &:nth-of-type(odd) {
      background-color: #efefef;
    }
    &:nth-of-type(even) {
      background-color: #ddd;
    }
    &:hover {
      background-color: #ccc;
    }
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
    color: #222;
  }
  thead {
    background-color: rgb(0, 0, 0, 0.8);
    color: #ffe919;
    border-bottom: none;
    /* #32E246 */
    /* #FF0C08 */
    /* #D725EC */
    & th {
      padding: 1.5rem 0;
      min-width: 10rem;
      font-size: 1.3rem;
      letter-spacing: 0.2rem;
    }
  }
  caption {
    font-size: 2rem;
    padding: 5px;
    font-weight: bold;
    background-color: black;
    color: yellow;
  }
  .delete-icon {
    color: #ff0c08;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .detail-icon {
    color: #d725ec;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
export const StyledSearchBar = styled.form`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  input {
    height: 3rem;
    width: 20rem;
    text-indent: 1rem;
    font-size: 1rem;
    font-family: "Star Jedi";
    border: none;
    border-radius: 0.3rem;
    padding-inline: 1rem;
    &:focus {
      outline: none;
    }
  }

  select {
    font-family: "Star Jedi";
    height: 3rem;
    font-size: 0.9rem;
    text-indent: 0.5rem;
    border-radius: 0.3rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 0.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-family: "Star Jedi";
  font-size: 0.7rem;
  cursor: pointer;
  background-color: #32e246;
  color: #444;
`;

export const StyledLogin = styled.div`
  /* ... */
  width: 100vw;
  height: 100vh;
  background: url(${Enter});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  padding-bottom: 10rem;
  h1 {
    color: white;
    text-align: center;
    margin-top: 10rem;
  }
  & div {
    display: flex;
    gap: 2rem;
  }
`;

export const EnterButton = styled.button`
  /* ... */
  padding: 3rem;
  font-size: 2rem;
  font-family: "Star Jedi";
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};

  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;
export const StyledDetailModal = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    background-color: gray;
    width: 50%;
    height: 50%;
    padding: 1rem;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    img {
      width: 30%;
    }
    div {
      width: 70%;
    }
  }
`;
