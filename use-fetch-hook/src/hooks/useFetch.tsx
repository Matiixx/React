import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    return () => {
      setData(null);
      setLoading(false);
      setError(null);
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
