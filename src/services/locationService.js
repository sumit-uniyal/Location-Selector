const BASE_URL = 'https://location-selector.labs.crio.do';

export const fetchCountries = async () => {
  const res = await fetch(`${BASE_URL}/countries`);
  return res.json();
};

export const fetchStates = async (country) => {
  const res = await fetch(`${BASE_URL}/country=${country}/states`);
  return res.json();
};

export const fetchCities = async (country, state) => {
  const res = await fetch(
    `${BASE_URL}/country=${country}/state=${state}/cities`
  );
  return res.json();
};
