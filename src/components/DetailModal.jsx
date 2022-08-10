import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledDetailModal } from "./styled-components/scHome";
const DetailModal = ({ detailName, onShow }) => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://akabab.github.io/starwars-api/api/all.json"
        );
        setPeople(data?.find((char) => char.name === detailName));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [detailName]);
  return (
    <StyledDetailModal onClick={() => onShow(false)}>
      {loading && <p>Loading...</p>}
      {!loading && (
        <section>
          <img src={people?.image} alt={people?.name} />
          <div>
            <h2>Name: {people?.name?.toLowerCase()}</h2>
            <h3>Homeworld: {people?.homeworld}</h3>
            <h4>Species: {people?.species?.toLowerCase()}</h4>
          </div>
        </section>
      )}
    </StyledDetailModal>
  );
};

export default DetailModal;
