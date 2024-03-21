import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const abortCont = new AbortController();

      const fetchData = async () => {
        try {
          const response = await fetch(url, { signal: abortCont.signal });
          if (!response.ok) {
            throw new Error("error fetching data");
          }
          const data = await response.json();
          setBlogs(data);
          setLoading(false);
          setError(null);
          console.log(data);
        } catch (error) {
          if (error.name === "Abort Error") {
            console.log("fetch aborted");
          } else {
            setLoading(false);
            setError(error.message);
            console.error("error fetching data", error.message);
          }
        }
      };
      fetchData();
      return () => console.log("cleanup");
    }, 1000);
  }, [url]);

  return { blogs, loading, error };
};

export default useFetch;
