import { useState, useCallback } from "react";
import { useToken } from "../global/AuthProvider";

const useApiRequest = (req) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const token = useToken();

  const requestFunction = useCallback(async (variables = {}, options = {}) => {
    try {
      setLoading(true);
      const data = await req(variables, {
        ...options,
        headers: {
          'Authorization': token,
          ...options.headers,
        }
      });
      setData(data);
      setLoading(false);
      return { data };
    } catch(error) {
      setError(error);
      return { error };
    }
  }, [setLoading, setData, setError])

  return [requestFunction, { data, loading, error }];
}

export default useApiRequest;