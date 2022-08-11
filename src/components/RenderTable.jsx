import React, { useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import useFetchData from "../hooks/useFetchData";
import { StyledTable } from "./styled-components/scHome";
import TableItem from "./TableItem";
const RenderTable = ({ gender, query, side, page }) => {
  const [item, setItem] = useState(null);
  const { people, loading } = useFetchData({ page });
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
      <StyledTable shadow={side ? "195" : "360"}>
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
            <tr colSpan={5} style={{ height: "50vh" }}>
              <td>
                <SpinnerCircularFixed />
              </td>
            </tr>
          )}
          {filtered?.map((char) => (
            <TableItem key={char.created} char={char} onDelete={setItem} />
          ))}
          {!loading && !filtered.length && (
            <tr colSpan={5}>
              <td>
                <h2>No item Found!</h2>
              </td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </>
  );
};
export default RenderTable;
