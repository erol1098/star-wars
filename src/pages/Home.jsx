import React, { useState } from "react";
import RenderTable from "../components/RenderTable";
import SearchBar from "../components/SearchBar";
const Home = () => {
  const [gender, setGender] = useState("all");
  console.log("gender", gender);
  return (
    <>
      <SearchBar gender={gender} setGender={setGender} />
      <RenderTable gender={gender} />
    </>
  );
};

export default Home;
