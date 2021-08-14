const APIKEY = process.env.APIKEY;
import { OpenWeatherData } from './weather.interface';

export async function fetchOpenWeatherData(
  city: string
): Promise<OpenWeatherData> {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('City not found');
  const data: OpenWeatherData = await response.json();
  return data;
}
