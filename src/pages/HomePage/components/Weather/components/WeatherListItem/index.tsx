import React from 'react';
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { Period } from '../../../../../../store/ducks/weather/types';

interface OwnProps {
  period: Period;
}

const WeatherListItem: React.FC<OwnProps> = ({ period }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={period.name} src={period.icon} />
        </ListItemAvatar>
        <ListItemText
          primary={`${period.name} ${period.temperature}°`}
          secondary={
            <>
              <small>
                {period.windSpeed} - {period.windDirection}
              </small>
              <p>{period.shortForecast}</p>
              <small>{period.detailedForecast}</small>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default WeatherListItem;
