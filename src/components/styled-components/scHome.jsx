import styled from "styled-components";
import background from "../../assets/background.jpg";
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
  background: url(${background});
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
    height: 20rem;
    display: block;
    width: 100%;
    overflow: auto;
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
  }
  thead {
    background-color: rgb(0, 0, 0, 0.8);
    color: #ffe919;
    /* border: 3px solid rgb(255, 12, 8, 0.4); */
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
    color: red;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
export const StyledSearchBar = styled.form`
  width: 100%;
  padding: 2rem 0;
  background-color: rgb(215, 37, 236, 0.4);
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
    font-size: 1rem;
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
  cursor: pointer;
`;
