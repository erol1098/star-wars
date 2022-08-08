import React, { useState } from "react";
import RenderTable from "../components/RenderTable";
import SearchBar from "../components/SearchBar";
const Home = () => {
  const [gender, setGender] = useState("all");
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBar
        gender={gender}
        setGender={setGender}
        query={query}
        setQuery={setQuery}
      />
      <RenderTable gender={gender} query={query} />
    </>
  );
};

export default Home;
