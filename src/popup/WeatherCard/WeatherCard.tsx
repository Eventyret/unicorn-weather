import React, { useEffect } from 'react';
import { fetchOpenWeatherData } from '../../utils/api';
import { Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import './WeatherCard.css';

const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [city]);
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{city}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
