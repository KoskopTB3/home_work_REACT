import { useEffect } from "react";
import { useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      // setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    const abortController = new AbortController();
    const signal = abortController.signal;

   //  setData(null);
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          const errorData = await response
            .json()
            .catch(() => ({ message: "Невідома помилка" }));
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }
        const json = await response.json();
        console.log("FETCH RESULT:", json);
        setData(json);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch request aborted.");
          return;
        }
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      abortController.abort();
      console.log("Мережевий запит скасовано при очищенні.");
    };
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
