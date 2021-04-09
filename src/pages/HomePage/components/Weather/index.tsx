import React, { useState } from 'react';

import { Container } from './styles';

import {
  Button,
  Grid,
  List,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../../store';
import { WeatherState } from '../../../../store/ducks/weather/types';
import { loadWeatherByAddress } from '../../../../store/ducks/weather/actions';
import WeatherListItem from './components/WeatherListItem';
import Error from '../../../../components/Error';

const Weather: React.FC = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [numberOfDays, setNumberOfDays] = useState(1);

  const { weather, weatherLoading, weatherError, errors } = useSelector<
    ApplicationState,
    WeatherState
  >(({ weather }) => weather);

  const loadWeather = () => {
    dispatch(loadWeatherByAddress(address, numberOfDays));
  };

  return (
    <Container>
      <Grid container spacing={10} padding={10}>
        <Grid item container direction="column" sm={4} className="fixed">
          <TextField
            label="Address"
            placeholder="Type an address"
            variant="outlined"
            onChange={({ target: { value } }) => setAddress(value)}
          />
          <Select
            variant="outlined"
            label="Days"
            value={numberOfDays}
            onChange={({ target: { value } }) =>
              setNumberOfDays(Number(value))
            }>
            <MenuItem value={1}>1 Day</MenuItem>
            <MenuItem value={2}>2 Days</MenuItem>
            <MenuItem value={3}>3 Days</MenuItem>
            <MenuItem value={4}>4 Days</MenuItem>
            <MenuItem value={5}>5 Days</MenuItem>
            <MenuItem value={6}>6 Days</MenuItem>
            <MenuItem value={7}>7 Days</MenuItem>
          </Select>
          <Button variant="contained" color="secondary" onClick={loadWeather}>
            Load Weather
          </Button>
        </Grid>
        <Grid item container direction="column" sm={8}>
          {weatherLoading && <p>Loading data...</p>}
          {weatherError && (
            <>
              <h3>Ups, something went wrong!</h3>
              {errors.map((error, i) => (
                <Error key={`error-${i}`}>{error.message}</Error>
              ))}
            </>
          )}
          {!weatherError && (
            <List>
              {weather.periods?.map((period, i) => (
                <WeatherListItem key={`item-${i}`} period={period} />
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Weather;
