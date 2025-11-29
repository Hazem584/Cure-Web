import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url, token = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      setData(res.data);
    } catch (err) {
      console.log("FETCH ERROR:", err.response || err);
      setError(err.response?.data?.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error, refetch: getData };
};

export default useAxios;
