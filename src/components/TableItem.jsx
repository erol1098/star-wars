import axios from "axios";
import React, { useEffect, useState } from "react";
const TableItem = ({ char: { name, height, gender, films }, onDelete }) => {
  const [filmArr, setFilmArr] = useState([]);
  const [show, setShow] = useState(false);
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
        <button onClick={() => setShow((prev) => !prev)}>Show Films</button>
        <span>{show && filmArr?.map((film) => <p key={film}>{film}</p>)}</span>
      </td>
      <td onClick={() => onDelete(name)}>x</td>
    </tr>
  );
};

export default TableItem;
