import React from "react";
import useFetchData from "../hooks/useFetchData";
import { StyledTable } from "./styled-components/scHome";
import TableItem from "./TableItem";
const RenderTable = () => {
  const { people, loading } = useFetchData();
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
          {people.map((char) => {
            // console.log("char", char);
            return (
              <TableItem
                key={Math.trunc(Math.random() * 10000) + 1}
                char={char}
              />
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
};

export default RenderTable;
