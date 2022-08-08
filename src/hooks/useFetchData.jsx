import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://swapi.dev/api/people");
        setPeople(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { people, loading, error };
};

export default useFetchData;
