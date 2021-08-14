import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from './WeatherCard';
import '@fontsource/roboto';
import './popup.css';

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="London" />
      <WeatherCard city="Bournemouth" />
      <WeatherCard city="asd" />
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
