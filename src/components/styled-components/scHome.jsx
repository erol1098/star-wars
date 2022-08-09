import styled from "styled-components";
import background from "../../assets/background.jpg";
import { createGlobalStyle } from "styled-components";
import STJEDISE from "../../assets/fonts/Star-Jedi Special Edition/STJEDISE.TTF";
export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
  @font-face {
    font-family: 'StarJedi Special Edition';
    src: url(${STJEDISE}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

`;

export const StyledHome = styled.main`
  width: 100%;
  height: 100vh;
  background: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: green;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
`;

export const StyledTable = styled.table`
  font-family: "StarJedi Special Edition";
  width: 80%;
  caption-side: top;
  border: 3px solid #888;
  border-collapse: collapse;
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
    background-color: #000;
    color: yellow;

    & th {
      padding: 1.5rem 0;
      min-width: 10rem;
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
  background-color: rgb(128, 128, 128, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  input {
    height: 3rem;
    width: 20rem;
    text-indent: 1rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 1rem;
    padding-inline: 1rem;
    &:focus {
      outline: none;
    }
  }

  select {
    height: 3rem;
    font-size: 1.2rem;
    text-indent: 0.5rem;
  }
`;
