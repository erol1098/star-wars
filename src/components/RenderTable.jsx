import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { StyledTable } from "./styled-components/scHome";
import TableItem from "./TableItem";
const RenderTable = ({ gender }) => {
  const [item, setItem] = useState(null);
  const { people, loading } = useFetchData();
  const [updatedPeople, setUpdatedPeople] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    // setUpdatedPeople(people);
    setUpdatedPeople((prevPeople) =>
      prevPeople.filter((char) => char.name !== item)
    );
  }, [item]);

  useEffect(() => {
    setUpdatedPeople(people);
  }, [people]);

  useEffect(() => {
    setFiltered(
      updatedPeople.filter((char) =>
        gender === "all" ? true : char.gender === gender
      )
    );
  }, [updatedPeople, gender]);

  // console.log("item", item);
  // console.log("people", people);
  // console.log("updatedPeople", updatedPeople);
  console.log("filtered", filtered);
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
          {filtered?.map((char) => {
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
