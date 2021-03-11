import api from './api';

export const getWeatherByAddress = (address: string) => {
  const url = `/v1/weather?address=${address}`;
  return api.get(url);
};
