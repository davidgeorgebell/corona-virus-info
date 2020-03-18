import useFetch from '../utils/useFetch';

export default function CountrySelect() {
  const countries = useFetch('https://covid19.mathdro.id/api/countries');
  console.log(countries);
  if (!countries) return <p>Loading</p>;
  return (
    <div>
      <p>Countries:</p>
      <select>
        {Object.entries(countries.countries).map(([name, code]) => (
          <option value={code} key={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
