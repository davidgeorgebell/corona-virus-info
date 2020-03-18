import useFetch from '../utils/useFetch';

export default function Info({ url }) {
  const info = useFetch(url);
  const error = useFetch(url);
  if (!info) return null;
  if (error > 0) return <p>Error</p>;

  return (
    <div className='info-wrapper'>
      <div>
        <h1>World Wide:</h1>
        <h3>Confirmed:</h3>
        <span>{info.confirmed ? info.confirmed.value : 'Not available'}</span>
      </div>
      <div>
        <h3>Deaths:</h3>
        <span>{info.deaths ? info.deaths.value : 'Not available'}</span>
      </div>
      <div>
        <h3>Recovered:</h3>
        <span>{info.recovered ? info.recovered.value : 'Not available'}</span>
      </div>
    </div>
  );
}
