import useFetch from '../utils/useFetch';

export default function Info() {
  const info = useFetch('https://covid19.mathdro.id/api/');
  if (!info) return <p>Loading</p>;
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
