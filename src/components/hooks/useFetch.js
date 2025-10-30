import { useEffect, useState, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const req = await fetch(url);
      const res = await req.json();
      setData(res);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, error, loading };
};

export default useFetch;
