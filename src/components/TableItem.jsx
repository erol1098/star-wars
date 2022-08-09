import axios from "axios";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { Button } from "./styled-components/scHome";
import DetailModal from "./DetailModal";
const TableItem = ({
  char: { name, height, gender, films, homeworld, mass },
  onDelete,
}) => {
  const [filmArr, setFilmArr] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

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
    <>
      <tr>
        <td>{name.toLowerCase()}</td>
        <td>{height}</td>
        <td>{mass}</td>
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
        <td>
          <MdDelete onClick={() => onDelete(name)} className="delete-icon" />
          <BiDetail
            className="detail-icon"
            onClick={() => setShowDetail(true)}
          />
        </td>
      </tr>
      {showDetail && <DetailModal detailName={name} onShow={setShowDetail} />}
    </>
  );
};

export default TableItem;
