import axios from 'axios';

const API_KEY = '8f2a8ae1c61d1dc524bd486b4aca7e2d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},mt`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}