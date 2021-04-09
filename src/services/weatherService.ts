import api from './api';

export const getWeatherByAddress = (address: string, numberOrDays: number) => {
  const url = `/v1/weather?address=${address}&numberOfDays=${numberOrDays}`;
  return api.get(url);
};
