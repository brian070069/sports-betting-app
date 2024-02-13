import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setIsLoading(false);
      setData(response.data);
    } catch (error) {
      setIsLoading(false);
      if (!error.response) {
        toast.error("failed to contact the server.");
      } else {
        toast.error("An error occured Please try again.");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading };
};
