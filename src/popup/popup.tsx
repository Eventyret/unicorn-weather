import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from './WeatherCard';
import './popup.css';
import '@fontsource/roboto';

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="London" />
      <WeatherCard city="Bournemouth" />
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
