import { useState } from 'react';
import MainLogo from '@/main-logo';

interface Country {
  name: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
}

const CountryInfo = ({ countryData }: { countryData: Country }) => {
  return (
    <div className='card_item'>
      <img src={countryData.flag} alt={`${countryData.name} flag`} />
      <br />
      <h2>{countryData.name}</h2>
      <p>Capital: {countryData.capital}</p>
      <p>Population: {countryData.population}</p>
      <p>Region: {countryData.region}</p>
      <p>Subregion: {countryData.subregion}</p>
    </div>
  );
};

const CountryInfoApp = () => {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState<Country | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
      const data = await response.json();
      if (data.status === 404) {
        setError('Invalid country name. Please try again.');
      } else {
        setCountryData(data[0]);
        setError(null);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='next-extended-container'>
      <MainLogo/>
      <h2 className='creator-content'>Developed by <a href="">Ramazan Azimli</a></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={countryName}
          onChange={(event) => setCountryName(event.target.value)}
          placeholder="Enter a country name"
        />
        <button type="submit">Enter</button>
      </form>
      {error && <p>{error}</p>}
      {countryData && <CountryInfo countryData={countryData} />}
    </div>
  );
};

export default CountryInfoApp;