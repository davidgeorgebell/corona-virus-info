import { useState, useEffect } from 'react';

export default function useFetch() {
  const [response, setResponse] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Mounting or Updating');
    const fetchData = async () => {
      try {
        const res = await fetch('https://covid19.mathdro.id/api/');
        const json = await res.json();
        console.table(json);
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
}
