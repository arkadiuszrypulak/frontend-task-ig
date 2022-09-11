import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const useFetch = (url, key, types) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredName = [];

  const header = {
    headers: {
      "x-apikey": key,
    },
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, header);
        response.data.forEach((el) => {
          if (el.name !== undefined) {
            filteredName.push(el);
          }
        });
        setData(filteredName);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetch();
  }, [url, key]);

  return { data, error, loading };
};
