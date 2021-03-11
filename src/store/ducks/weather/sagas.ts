import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { getWeatherByAddress } from '../../../services/weatherService';

import {
  loadWeatherByAddressSuccess,
  loadWeatherByAddressError,
} from './actions';

export function* loadWeatherByAddress(action: any) {
  try {
    const response = yield call(getWeatherByAddress, action.payload.address);
    yield put(loadWeatherByAddressSuccess(response));
  } catch (err) {
    yield put(loadWeatherByAddressError(err));
  }
}
