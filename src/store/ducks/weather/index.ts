import { Reducer } from 'redux';
import { PayloadAction } from 'typesafe-actions';
import { WeatherTypes, WeatherState } from './types';

const INITIAL_STATE: WeatherState = {
  address: '',
  weather: {},
  weatherLoading: false,
  weatherError: false,
  errors: [],
};

const reducer: Reducer<
  WeatherState,
  PayloadAction<WeatherTypes, WeatherState>
> = (
  state: WeatherState = INITIAL_STATE,
  action: PayloadAction<WeatherTypes, WeatherState>,
) => {
  switch (action.type) {
    case WeatherTypes.LOAD_WEATHER_BY_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
        weather: {},
        weatherError: false,
        weatherLoading: true,
      };
    case WeatherTypes.LOAD_WEATHER_BY_ADDRESS_SUCCCES:
      return {
        ...state,
        weather: action.payload.weather,
        weatherError: false,
        weatherLoading: false,
      };
    case WeatherTypes.LOAD_WEATHER_BY_ADDRESS_ERROR:
      return {
        ...state,
        weatherError: true,
        weatherLoading: false,
        errors: action.payload.errors,
      };
    default:
      return state;
  }
};

export default reducer;
