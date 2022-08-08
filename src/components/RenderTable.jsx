import React, { useEffect, useState, useRef } from "react";
import useFetchData from "../hooks/useFetchData";
import { StyledTable } from "./styled-components/scHome";
import TableItem from "./TableItem";
const RenderTable = () => {
  const [item, setItem] = useState(null);
  const { people, loading } = useFetchData();
  const temp = useRef([]);
  const [updatedPeople, setUpdatedPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  temp.current = people;

  useEffect(() => {
    // setUpdatedPeople(people);
    console.log("item", item);
    temp.current = temp.current.filter((char) => char.name !== item);
    setFilteredPeople(temp.current);
    console.log(temp.current);
  }, [item]);

  useEffect(() => {
    setFilteredPeople(people);
  }, [people]);

  // useEffect(() => {
  //   setFilteredPeople(updatedPeople.filter((char) => char.name !== item));
  // }, []);

  console.log("item", item);
  console.log("people", people);
  console.log("temp", temp.current);
  // console.log("updatedPeople", updatedPeople);
  console.log("filteredPeople", filteredPeople);
  return (
    <>
      <StyledTable>
        <caption>Star Wars Characters</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Gender</th>
            <th>Films</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={5}> Loading...</td>
            </tr>
          )}
          {filteredPeople?.map((char) => {
            // console.log("char", char);
            return (
              <TableItem
                key={Math.trunc(Math.random() * 10000) + 1}
                char={char}
                onDelete={setItem}
              />
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
};

export default RenderTable;
