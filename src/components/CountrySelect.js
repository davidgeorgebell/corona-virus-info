import { useState } from 'react';
import useFetch from '../utils/useFetch';
import Info from './Info';

export default function CountrySelect() {
  const [country, setCountry] = useState('GBR');
  const countries = useFetch('https://covid19.mathdro.id/api/countries');
  if (!countries) return null;

  return (
    <div>
      <h2>Showing: {country}</h2>
      <select onChange={(event) => setCountry(event.target.value)}>
        {Object.entries(countries.countries).map(([name, code]) => (
          <option
            selected={country === countries.iso3[code]}
            value={countries.iso3[code]}
            key={name}>
            {name}
          </option>
        ))}
      </select>
      <Info url={`https://covid19.mathdro.id/api/countries/${country}`}></Info>
    </div>
  );
}
