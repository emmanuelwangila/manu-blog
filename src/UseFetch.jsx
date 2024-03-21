import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("error fetching data");
          }
          const data = await response.json();
          setBlogs(data);
          setLoading(false);
          setError(null);
          console.log(data);
        } catch (error) {
          setLoading(false);
          setError(error.message);
          console.error("error fetching data", error.message);
        }
      };
      fetchData();
    }, 1000);
  }, [url]);

  return { blogs, loading, error };
};

export default useFetch;
