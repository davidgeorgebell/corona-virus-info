import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [info, setInfo] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Mounting or Updating');
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setInfo(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return info;
}
