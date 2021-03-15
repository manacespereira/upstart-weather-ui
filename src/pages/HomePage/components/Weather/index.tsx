import React, { useState } from 'react';

import { Container } from './styles';

import { Button, Grid, List, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../../store';
import { WeatherState } from '../../../../store/ducks/weather/types';
import { loadWeatherByAddress } from '../../../../store/ducks/weather/actions';
import WeatherListItem from './components/WeatherListItem';
import Error from '../../../../components/Error';

const Weather: React.FC = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');

  const { weather, weatherLoading, weatherError, errors } = useSelector<
    ApplicationState,
    WeatherState
  >(({ weather }) => weather);

  const loadWeather = () => {
    dispatch(loadWeatherByAddress(address));
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
          <Button variant="contained" color="secondary" onClick={loadWeather}>
            Load Weather
          </Button>
        </Grid>
        <Grid item container direction="column" sm={8}>
          {weatherLoading && <p>Loading data...</p>}
          {weatherError && (
            <>
              <h3>Ups, something goes wrong!</h3>
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
