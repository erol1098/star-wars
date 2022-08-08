import axios from "axios";
import React, { useState } from "react";
const TableItem = ({ char: { name, height, gender, films }, onDelete }) => {
  const [filmArr, setFilmArr] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
    !filmArr.length &&
      films.map((url) =>
        (async () => {
          try {
            setLoading(true);
            const { data } = await axios.get(url);
            setFilmArr((prevFilmArr) => [...prevFilmArr, data.title]);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        })()
      );
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{height}</td>
      <td>{gender}</td>
      {!loading && (
        <td>
          <button onClick={handleShow}>Show Films</button>
          <span>
            {show && filmArr?.map((film) => <p key={film}>{film}</p>)}
          </span>
        </td>
      )}
      {loading && <td>Loading...</td>}
      <td onClick={() => onDelete(name)}>x</td>
    </tr>
  );
};

export default TableItem;
