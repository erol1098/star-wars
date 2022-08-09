import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { StyledTable } from "./styled-components/scHome";
import TableItem from "./TableItem";
const RenderTable = ({ gender, query }) => {
  const [item, setItem] = useState(null);
  const { people, loading } = useFetchData();
  const [updatedPeople, setUpdatedPeople] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    setUpdatedPeople((prevPeople) =>
      prevPeople.filter((char) => char.name !== item)
    );
  }, [item]);

  useEffect(() => {
    setUpdatedPeople(people);
  }, [people]);

  useEffect(() => {
    setFiltered(
      updatedPeople
        .filter((char) => (gender === "all" ? true : char.gender === gender))
        .filter((char) => {
          return char.name.toLowerCase().includes(query.toLowerCase());
        })
    );
  }, [updatedPeople, gender, query]);

  return (
    <>
      <StyledTable>
        {/* <caption>Star Wars Characters</caption> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Height (cm)</th>
            <th>Gender</th>
            <th>Films</th>
            <th>Homeworld</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={5}> Loading...</td>
            </tr>
          )}
          {filtered?.map((char) => (
            <TableItem
              key={Math.trunc(Math.random() * 10000) + 1}
              char={char}
              onDelete={setItem}
            />
          ))}
          {!filtered.length && (
            <tr>
              <td colSpan={5}> No Item Found!</td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </>
  );
};

export default RenderTable;
