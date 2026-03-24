const BASE_URL = 'https://location-selector.labs.crio.do';

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/countries`);

    if (!response.ok) {
      throw new Error('API failed');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
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
