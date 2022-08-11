import styled from "styled-components";
import Background from "../../assets/background.jpg";
import Enter from "../../assets/enter.jpg";
import SearchIcon from "../../assets/search.png";
import { createGlobalStyle } from "styled-components";
import Starjedi from "../../assets/fonts/starjedi/Starjedi.ttf";
import StarJediHollow from "../../assets/fonts/Starjhol.ttf";

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

  @font-face {
    font-family: 'Star Jedi Hollow';
    src: url(${StarJediHollow});
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
  gap: 1rem;
`;

export const StyledTable = styled.table`
  font-family: "Star Jedi";
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  width: 80%;
  caption-side: top;
  border-collapse: collapse;
  border-radius: 1rem;
  box-shadow: inset 0 0 4px hsl(${(props) => props.shadow} 100% 50% / 1),
    0 0 1em hsl(${(props) => props.shadow} 100% 50% / 0.8),
    0 0 1.5em hsl(${(props) => props.shadow} 100% 50% / 0.7),
    0 0 2em hsl(${(props) => props.shadow} 100% 50% / 0.5),
    0 0 3em hsl(${(props) => props.shadow} 100% 50% / 0.3),
    0 0 5em hsl(${(props) => props.shadow} 100% 50% / 0.2);
  td {
    padding: 5px 10px;
    text-align: center;
    padding: 1rem 0;
    border: none;
  }
  thead {
    display: block;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
  tbody {
    max-height: 50vh;
    display: block;
    width: 100%;
    overflow: auto;
    font-size: 0.9rem;
    border-radius: 0 0 1rem 1rem;
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
    & th {
      padding: 1.5rem 0;
      min-width: 10rem;
      font-size: 1.3rem;
      letter-spacing: 0.2rem;
      border: none;
    }
  }
  caption {
    font-size: 2rem;
    padding: 5px;
    font-weight: bold;
    background-color: black;
    color: yellow;
    font-family: "Star Jedi Hollow";
  }
  .delete-icon {
    color: #ff0c08;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 1s;
    &:hover {
      transform: scale(1.5);
    }
  }
  .detail-icon {
    color: #000;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 1s;
    &:hover {
      transform: scale(1.5);
    }
  }
`;
export const StyledSearchBar = styled.form`
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.8);

  input {
    background-image: url(${SearchIcon});
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    height: 3rem;
    width: 20rem;
    text-indent: 1rem;
    font-size: 1rem;
    font-family: "Star Jedi";
    border: none;
    border-radius: 0.3rem;
    padding-inline: 2rem;
    &:focus {
      outline: none;
    }
  }

  select {
    font-family: "Star Jedi";
    height: 3rem;
    width: 7rem;
    font-size: 0.9rem;
    text-indent: 0.5rem;
    border-radius: 0.3rem;
    padding: 0 0.5rem;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  box-shadow: #000 0px 0px 5px;
  font-family: "Star Jedi";
  font-size: 0.7rem;
  cursor: pointer;
  color: #444;
  transition: transform 1s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Star Jedi";
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
    color: #ffe919;
    font-size: 5rem;
    text-align: center;
    margin-top: 10rem;
  }
  & div {
    display: flex;
    gap: 4rem;
  }

  /* box-shadow: inset 0 0 4px hsl(195 100% 50% / 1),
      0 0 1em hsl(195 100% 50% / 0.8), 0 0 1.5em hsl(195 100% 50% / 0.7),
      0 0 2em hsl(195 100% 50% / 0.5), 0 0 3em hsl(195 100% 50% / 0.3),
      0 0 5em hsl(195 100% 50% / 0.2); */
`;

export const EnterButton = styled.button`
  padding: 0.5rem 3rem;
  font-size: 2rem;
  font-family: ${(props) => props.font};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  box-shadow: inset 0 0 4px hsl(${(props) => props.borColor} 100% 50% / 1),
    0 0 1em hsl(${(props) => props.borColor} 100% 50% / 0.8),
    0 0 1.5em hsl(${(props) => props.borColor} 100% 50% / 0.7),
    0 0 2em hsl(${(props) => props.borColor} 100% 50% / 0.5),
    0 0 3em hsl(${(props) => props.borColor} 100% 50% / 0.3),
    0 0 5em hsl(${(props) => props.borColor} 100% 50% / 0.2);
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
    background-color: hsl(${(props) => props.borColor} 100% 50% / 0.9);
  }
`;
export const StyledDetailModal = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    background-color: #eee;
    width: 50%;
    height: 50%;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: inset 0 0 4px hsl(60 100% 50% / 1),
      0 0 1em hsl(60 100% 50% / 0.8), 0 0 1.5em hsl(60 100% 50% / 0.7),
      0 0 2em hsl(60 100% 50% / 0.5), 0 0 3em hsl(60 100% 50% / 0.3),
      0 0 5em hsl(60 100% 50% / 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    img {
      width: 30%;
      height: 90%;
      border-radius: 0.3rem;
    }
    div {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 2rem;
    }
  }
`;
