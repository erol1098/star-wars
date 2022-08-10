import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { StyledTable } from "./styled-components/scHome";
import TableItem from "./TableItem";
const RenderTable = ({ gender, query, side }) => {
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
  console.log("loading", loading);
  return (
    <>
      <StyledTable shadow={side ? "195" : "360"}>
        {/* <caption>
          {side
            ? "May the Force be with you".toLowerCase()
            : "If Once You Start Down The Dark Path,\n Forever Will It Dominate Your Destiny".toLowerCase()}
        </caption> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Height (cm)</th>
            <th>Mass (kg)</th>
            <th>Gender</th>
            <th>Films</th>
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
            <TableItem key={char.created} char={char} onDelete={setItem} />
          ))}
          {!loading && !filtered.length && (
            <tr>
              <td colSpan={5}> No item Found!</td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </>
  );
};

export default RenderTable;
