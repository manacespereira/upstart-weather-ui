import { action } from 'typesafe-actions';
import { WeatherTypes } from './types';

export const loadWeatherByAddress = (address: string) =>
  action(WeatherTypes.LOAD_WEATHER_BY_ADDRESS, { address });

export const loadWeatherByAddressSuccess = (weather: any) =>
  action(WeatherTypes.LOAD_WEATHER_BY_ADDRESS_SUCCCES, { weather });

export const loadWeatherByAddressError = (notifications: Array<Notification>) =>
  action(WeatherTypes.LOAD_WEATHER_BY_ADDRESS_ERROR, { notifications });
