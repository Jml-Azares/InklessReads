import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiGet = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(`could not fetch the data for that resource`);
      }
      const dataObject = await response.json();
      const data = dataObject.results;

      setData(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError("Error fetching API:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    apiGet();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
