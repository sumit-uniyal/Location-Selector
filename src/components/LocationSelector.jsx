import React, { useEffect, useState } from 'react';
import {
  fetchCountries,
  fetchStates,
  fetchCities,
} from '../services/locationService';

const LocationSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  // Load Countries
  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  // Load States
  useEffect(() => {
    if (country) {
      fetchStates(country).then((data) => {
        setStates(data);
        setState('');
        setCities([]);
        setCity('');
      });
    }
  }, [country]);

  // Load Cities
  useEffect(() => {
    if (country && state) {
      fetchCities(country, state).then((data) => {
        setCities(data);
        setCity('');
      });
    }
  }, [state]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Select Location</h1>

      <div style={{ marginTop: '20px' }}>
        {/* Country */}
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', width: '250px' }}
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* State */}
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          disabled={!country}
          style={{ padding: '10px', marginRight: '10px', width: '250px' }}
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* City */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!state}
          style={{ padding: '10px', width: '200px' }}
        >
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {city && (
        <p style={{ marginTop: '30px', fontSize: '18px' }}>
          You selected <b>{city}</b>, {state}, {country}
        </p>
      )}
    </div>
  );
};

export default LocationSelector;
