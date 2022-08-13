import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = ({ page }) => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://swapi.dev/api/people/?page=${page}`
        );
        setPeople(data.results);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    })();
  }, [page]);
  return { people, loading, error };
};
export default useFetchData;
