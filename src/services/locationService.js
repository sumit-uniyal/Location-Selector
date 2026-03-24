const BASE_URL = 'https://location-selector.labs.crio.do';

const safeJsonParse = async (response) => {
  const text = await response.text();
  return text ? JSON.parse(text) : [];
};

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/countries`);

    if (!response.ok) {
      throw new Error('API failed');
    }

    return await safeJsonParse(response);
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};

export const fetchStates = async (country) => {
  try {
    const res = await fetch(`${BASE_URL}/country=${country}/states`);

    if (!res.ok) {
      throw new Error('API failed');
    }

    return await safeJsonParse(res);
  } catch (error) {
    console.error('Error fetching state:', error);
    return [];
  }
};

export const fetchCities = async (country, state) => {
  try {
    const res = await fetch(
      `${BASE_URL}/country=${country}/state=${state}/cities`
    );

    if (!res.ok) {
      throw new Error('API failed');
    }

    return await safeJsonParse(res);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};
