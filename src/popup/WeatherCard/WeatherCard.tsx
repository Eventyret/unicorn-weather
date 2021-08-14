import React, { useEffect, useState } from 'react';
import { fetchOpenWeatherData } from '../../utils/api';
import { Typography } from '@material-ui/core';
import { OpenWeatherData } from '../../utils/weather.interface';
import WeatherCardContainer from '../WeatherCardContainer';
import './WeatherCard.css';

type WeatherCardState = 'loading' | 'error' | 'ready';
const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData>(null);
  const [cardState, setCardState] = useState<WeatherCardState>('loading');

  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        setCardState('ready');
      })
      .catch((err) => setCardState('error'));
  }, [city]);
  if (cardState == 'loading' || cardState == 'error') {
    return (
      <WeatherCardContainer>
        <Typography variant="body1">
          {cardState == 'loading'
            ? 'Loading...'
            : 'Error: could not retrive weather data for this city'}
        </Typography>
      </WeatherCardContainer>
    );
  }
  return (
    <WeatherCardContainer>
      <Typography variant="h5">{weatherData.name}</Typography>
      <Typography variant="body1">
        {Math.round(weatherData.main.temp)}
      </Typography>
      <Typography variant="body1">
        Feels like: {Math.round(weatherData.main.feels_like)}
      </Typography>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
