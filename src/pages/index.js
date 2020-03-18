import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

function useFetch() {
  const [info, setInfo] = useState();
  const [error, setError] = useState();
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Mounting or Updating');
    const fetchData = async () => {
      try {
        const res = await fetch('https://covid19.mathdro.id/api/');
        const json = await res.json();
        console.table(json);
        setInfo(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return info;
}

function Info() {
  const info = useFetch();
  console.log(info);
  if (!info) return <p>Nothing to show</p>;
  return (
    <div className='info-wrapper'>
      <div>
        <h3>Confirmed:</h3>
        <span>{info.confirmed.value}</span>
      </div>
      <div>
        <h3>Deaths:</h3>
        <span>{info.deaths.value}</span>
      </div>
      <div>
        <h3>Recovered:</h3>
        <span>{info.recovered.value}</span>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <Layout>
      <p>Hello World</p>
      <Info></Info>
    </Layout>
  );
}
