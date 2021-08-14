import React, { useState } from 'react';
import '@fontsource/roboto';
import ReactDOM from 'react-dom';
import './popup.css';
import WeatherCard from './WeatherCard';
import WeatherCardContainer from './WeatherCardContainer';

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([
    'London',
    'Bournemouth',
    'Errori'
  ]);
  return (
    <div>
      {cities.map((city, index) => (
        <WeatherCard city={city} key={index} />
      ))}
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
