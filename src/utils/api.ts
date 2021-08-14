const APIKEY = process.env.APIKEY;

export async function fetchOpenWeatherData(city: string): Promise<any> {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${APIKEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('City not found');
  const data = await response.json();
  return data;
}
