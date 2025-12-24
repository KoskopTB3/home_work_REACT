import { useState, useEffect } from "react";
const API_BASE_URL = "https://bank.gov.ua"; // Базовий URL бекенду

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }
    const fullUrl = `${API_BASE_URL}${url}`;

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(fullUrl);

        if (!response.ok) {
          const errorData = await response
            .json()
            .catch(() => ({ message: "Невідома помилка" }));
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const json = await response.json();
		  const dataExchangeRate = json.map(item=>(
			{
				id: item.r030,
				title: item.txt,
				rate: item.rate,
				cc: item.cc
			}
		  ))
        setData(dataExchangeRate);
      } catch (err) {
        setError(err.message || "Помилка запиту");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
