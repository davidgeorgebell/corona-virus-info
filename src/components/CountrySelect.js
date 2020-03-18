import { useState } from 'react';
import useFetch from '../utils/useFetch';
import Info from './Info';

export default function CountrySelect() {
  const [country, setCountry] = useState('GBR');
  const countries = useFetch('https://covid19.mathdro.id/api/countries');

  if (!countries) return null;

  const countryArr = Object.entries(countries.countries).map(([key, value]) => {
    return {
      name: `${key}`,
      code: `${value}`
    };
  });

  return (
    <div>
      <h2>Showing: {country}</h2>
      <select
        onChange={(event) => setCountry(event.target.value)}
        defaultValue={{ name: country }}>
        {countryArr.map((country) => (
          <option value={country.code} key={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <Info url={`https://covid19.mathdro.id/api/countries/${country}`}></Info>
    </div>
  );
}

// {
//   Object.entries(countryArr).map(([key, value]) => (
//     <option
//       //   selected={country === countries.iso3[value]}
//       value={countries.iso3[value]}
//       key={key}>
//       {key}
//     </option>
//   ));
// }
