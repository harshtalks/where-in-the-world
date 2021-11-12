import { useState, useEffect } from "react";

export default function useCountry(region = false) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData(region);
  }, [region]);

  const fetchData = async (region) => {
    try {
      if (!region) {
        const fetching = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await fetching.json();
        setData(jsonData);
      } else {
        const fetching = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );
        const jsonData = await fetching.json();
        setData(jsonData);
        console.log(jsonData);
      }
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  return { loading, data, error };
}
