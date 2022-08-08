import axios from "axios";
import React, { useEffect, useState } from "react";
const TableItem = ({ char: { name, height, gender, films }, onDelete }) => {
  const [filmArr, setFilmArr] = useState([]);

  useEffect(() => {
    films.map((url) =>
      (async () => {
        const { data } = await axios.get(url);
        setFilmArr((prevFilmArr) => [...prevFilmArr, data.title]);
      })()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <tr>
      <td>{name}</td>
      <td>{height}</td>
      <td>{gender}</td>
      <td>
        {filmArr?.map((film) => (
          <p>{film}</p>
        ))}
      </td>
      <td onClick={() => onDelete(name)}>x</td>
    </tr>
  );
};

export default TableItem;
