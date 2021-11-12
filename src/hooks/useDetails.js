import { useState, useEffect } from "react";
const useDetails = (param) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData(param);
  }, [param]);

  const fetchData = async (param) => {
    try {
      const fetching = await fetch(
        `https://restcountries.com/v3.1/alpha/${param.toLowerCase()}`
      );
      const jsonData = await fetching.json();
      setData(jsonData[0]);
      console.log(jsonData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  return { loading, data, error };
};

export default useDetails;
