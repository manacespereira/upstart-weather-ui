import { call, put } from 'redux-saga/effects';
import { PayloadAction } from 'typesafe-actions';

import api from '../../../services/api';
import { getWeatherByAddress } from '../../../services/weatherService';

import {
  loadWeatherByAddressSuccess,
  loadWeatherByAddressError,
} from './actions';
import { WeatherState, WeatherTypes } from './types';

export function* loadWeatherByAddressSaga(
  action: PayloadAction<WeatherTypes, WeatherState>,
) {
  try {
    const response = yield call(
      getWeatherByAddress,
      action.payload.address,
      action.payload.numberOfDays,
    );
    yield put(loadWeatherByAddressSuccess(response.data));
  } catch (err) {
    yield put(loadWeatherByAddressError(err.response?.data));
  }
}
