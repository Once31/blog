import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    // console.log(dataUrl);
    const source = axios.CancelToken.source();
    // console.log(axios);
    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          source: source.token,
        });
        // console.log(response);
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }

      const cleanUp = () => {
        console.log(" clean up function");
        isMounted = false;
        source.cancel();
      };

      return cleanUp;
    };
    fetchData(dataUrl);
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
