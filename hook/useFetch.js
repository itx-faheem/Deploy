import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    headers: {
      'X-RapidAPI-Key': 'd64b0c6d71msh11bfd9868cf3e3cp15ad0djsn306c1f1c9897',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query},
  };
  
  console.log(options.url.employer_logo, "employer_logo");
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data.data);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      setError(error)
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};


export default useFetch;
  