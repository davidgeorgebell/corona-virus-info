import { useState } from 'react';
import useFetch from '../utils/useFetch';
import Info from './Info';

export default function CountrySelect() {
  const [country, setCountry] = useState('GBR');
  const countries = useFetch('https://covid19.mathdro.id/api/countries');

  if (!countries) return null;

  return (
    <div>
      <select
        className='selector'
        onChange={(event) => setCountry(event.target.value)}
        defaultValue={country}>
        {Object.entries(countries.countries).map(([key, value]) => (
          <option
            className='selector__option'
            value={countries.iso3[value]}
            key={key}>
            {key}
          </option>
        ))}
      </select>
      <Info url={`https://covid19.mathdro.id/api/countries/${country}`}></Info>
    </div>
  );
}
