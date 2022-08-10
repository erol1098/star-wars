import React from "react";
import { StyledSearchBar } from "./styled-components/scHome";
const pageArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SearchBar = ({ gender, setGender, query, setQuery, page, setPage }) => {
  return (
    <StyledSearchBar>
      <input
        type={"search"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"Search for a keyword..."}
      />
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

      <select
        value={page}
        onChange={(e) => setPage(e.target.value)}
        name="page"
        id="page"
      >
        {pageArr.map((num) => (
          <option key={num} value={num}>
            Page {num}
          </option>
        ))}
      </select>
    </StyledSearchBar>
  );
};

export default SearchBar;
