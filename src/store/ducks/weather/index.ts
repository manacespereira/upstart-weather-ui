import { Reducer } from 'redux';
import { WeatherTypes, WeatherState, Weather } from './types';

const INITIAL_STATE: WeatherState = {
  address: '',
  weather: Weather,
  weatherLoading: false,
  weatherError: false,
};

const reducer: Reducer<WeatherState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherTypes.LOAD_WEATHER_BY_ADDRESS:
      return { ...state };
    case WeatherTypes.LOAD_WEATHER_BY_ADDRESS_SUCCCES:
      return {
        ...state,
      };
    case WeatherTypes.LOAD_WEATHER_BY_ADDRESS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
