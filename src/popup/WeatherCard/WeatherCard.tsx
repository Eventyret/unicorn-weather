import React, { useEffect, useState } from 'react';
import { fetchOpenWeatherData } from '../../utils/api';
import { Box, Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import './WeatherCard.css';
import { OpenWeatherData } from '../../utils/weather.interface';

const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData>(null);

  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => console.log(err));
  }, [city]);
  if (!weatherData) {
    return <div>Loading...</div>;
  }
  return (
    <Box mx={'4px'} my={'16px'}>
      <Card>
        <CardContent>
          <Typography variant="h5">{weatherData.name}</Typography>
          <Typography variant="body1">
            {Math.round(weatherData.main.temp)}
          </Typography>
          <Typography variant="body1">
            Feels like: {Math.round(weatherData.main.feels_like)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherCard;
