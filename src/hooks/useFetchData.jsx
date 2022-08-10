import axios from "axios";
import { useEffect, useState } from "react";

const page = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const useFetchData = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (() => {
      try {
        // setLoading(true);
        page.forEach(async (p) => {
          const { data } = await axios.get(
            `https://swapi.dev/api/people/?page=${p}`
          );
          setPeople((prevPeople) => [...data.results, ...prevPeople]);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
      } finally {
        // setLoading(false);
      }
    })();
  }, []);
  return { people, loading, error };
};

export default useFetchData;
