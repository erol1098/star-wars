import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Button } from "./styled-components/scHome";
const TableItem = ({
  char: { name, height, gender, films, homeworld },
  onDelete,
}) => {
  const [filmArr, setFilmArr] = useState([]);
  // const [home, setHome] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingHome, setLoadingHome] = useState(false);
  const home = useRef();
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
  useEffect(() => {
    (async () => {
      try {
        setLoadingHome(true);
        const { data } = await axios.get(homeworld);
        // setHome(data.name);
        home.current = data.name;
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingHome(false);
      }
    })();
  }, [homeworld]);

  return (
    <tr>
      <td>{name.toLowerCase()}</td>
      <td>{height}</td>
      <td>{gender}</td>
      {!loading && (
        <td>
          <Button onClick={handleShow}>
            {show ? "Hide Films" : "Show Films"}
          </Button>

          {show && (
            <span>
              {filmArr?.map((film) => (
                <p key={film}>{film}</p>
              ))}
            </span>
          )}
        </td>
      )}
      {loading && <td>Loading...</td>}

      {loadingHome ? <td>Loading...</td> : <td>{home.current}</td>}
      <td onClick={() => onDelete(name)}>
        <MdDelete className="delete-icon" />
      </td>
    </tr>
  );
};

export default TableItem;
