import React from "react";
import { StyledSearchBar } from "./styled-components/scHome";

const SearchBar = ({ gender, setGender }) => {
  return (
    <StyledSearchBar>
      <div>Search Bar</div>
      <input type={"search"} placeholder={"Search for a keyword..."} />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        name="gender"
        id="gender"
      >
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="n/a">No Gender</option>
      </select>
    </StyledSearchBar>
  );
};

export default SearchBar;
