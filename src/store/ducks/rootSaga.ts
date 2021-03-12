import { all, takeLatest } from 'redux-saga/effects';

import { WeatherTypes } from './weather/types';
import { loadWeatherByAddressSaga } from './weather/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(WeatherTypes.LOAD_WEATHER_BY_ADDRESS, loadWeatherByAddressSaga),
  ]);
}
