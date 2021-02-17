const apiEndpoint = "https://api.weatherapi.com/v1/current.json";

export async function getCurrentWeather(city) {
  const url = new URL(apiEndpoint);
  url.searchParams.append("key", "6d48f7fdbe4b4119b3391246211702");
  url.searchParams.append("q", city);

  const response = await fetch(url.toString());

  const weatherData = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  return weatherData.current.temp_c;
}
