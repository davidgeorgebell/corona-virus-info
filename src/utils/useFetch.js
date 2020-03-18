import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Mounting or Updating');
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
  }, []);
  return info;
}
