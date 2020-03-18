import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [info, setInfo] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Mounting or Updating');
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setInfo(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    setLoading(false);
  }, [url]);
  return error, info;
}
