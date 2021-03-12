import { action } from 'typesafe-actions';
import { Notification, Weather, WeatherTypes } from './types';

export const loadWeatherByAddress = (address: string) =>
  action(WeatherTypes.LOAD_WEATHER_BY_ADDRESS, { address });

export const loadWeatherByAddressSuccess = (weather: Weather) =>
  action(WeatherTypes.LOAD_WEATHER_BY_ADDRESS_SUCCCES, { weather });

export const loadWeatherByAddressError = (errors: Notification[]) =>
  action(WeatherTypes.LOAD_WEATHER_BY_ADDRESS_ERROR, { errors });
