import { useState, useCallback } from "react";
import { useToken } from "../global/AuthProvider";

function useApiRequest (req) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

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
      setLoading(false);
      return { error };
    }
  }, [setLoading, setData, setError, token])

  return [requestFunction, { data, loading, error }];
}

export default useApiRequest;