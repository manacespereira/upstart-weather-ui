/**
 * Action types
 */
export enum WeatherTypes {
  LOAD_WEATHER_BY_ADDRESS = '@weather/LOAD_WEATHER_BY_ADDRESS',
  LOAD_WEATHER_BY_ADDRESS_SUCCCES = '@weather/LOAD_WEATHER_BY_ADDRESS_SUCCCES',
  LOAD_WEATHER_BY_ADDRESS_ERROR = '@weather/LOAD_WEATHER_BY_ADDRESS_ERROR',
}

/**
 * Data types
 */
export interface Notification {
  property: string;
  message: string;
}

export interface Weather {
  periods: Period[];
  elevation: Elevation;
}

export interface Elevation {
  value: number;
  unitCode: string;
}

export interface Period {
  number: number;
  name: string;
  startTime: Date;
  endTime: Date;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: number;
  temperatureTrend: null;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

/**
 * State type
 */
export interface WeatherState {
  readonly address: string;
  readonly weather: Weather;
  readonly weatherLoading: boolean;
  readonly weatherError: boolean;
}
