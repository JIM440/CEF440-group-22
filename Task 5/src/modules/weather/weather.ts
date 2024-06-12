export type location = {
  name: string;
  lon: string;
  lat: string;
};

export const errorWeatherValue = {
  coord: { lon: 0, lat: 0 },
  weather: [{ id: 0, main: "Rain", description: "légère pluie", icon: "10n" }],
  base: "stations",
  main: {
    temp: 292.69,
    feels_like: 293.31,
    temp_min: 292.69,
    temp_max: 292.69,
    pressure: 1015,
    humidity: 100,
    sea_level: 1015,
    grnd_level: 907,
  },
  visibility: 2722,
  wind: { speed: 0.53, deg: 100, gust: 1.02 },
  rain: { "1h": 0.31 },
  clouds: { all: 100 },
  dt: 1717896880,
  sys: { country: "CM", sunrise: 1717909656, sunset: 1717954306 },
  timezone: 3600,
  id: 2223763,
  name: "Nkongsamba",
  cod: 200,
};

export var preferedLocations: location[] = [
  {
    name: "Buea, Cameroon",
    lat: "4.1623",
    lon: "9.2588",
  },
  {
    name: "Yaounde, Cameroon",
    lat: "3.8617",
    lon: "11.5202",
  },
  {
    name: "Kumba, Cameroon",
    lat: "4.6333",
    lon: "9.4450",
  },
  {
    name: "Massachusetts, US",
    lat: "42.360001",
    lon: "-71.092003",
  },
  {
    name: "Nkongsamba, Cameroon",
    lat: "4.9741",
    lon: "9.9353",
  },
];

export function setUpLocation(setCurrentLocation: Function) {
  setCurrentLocation(
    localStorage.getItem("currentLocation")
      ? JSON.parse(localStorage.getItem("currentLocation")!)
      : 0
  );
}

export function getLocalDateTime(
  date: number,
  timezone: number,
  language: string
) {
  const utc_milliseconds = (date + timezone) * 1000;
  const local_date = new Date(utc_milliseconds);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "long",
  };
  const formattedDate = local_date.toLocaleDateString(language, options);
  return formattedDate;
}

export const fetchWeatherData = async (
  location: location,
  lang: string,
  callBack: Function
) => {
  const apiKey = "//17c0ca1503c9a82af4b6be08659549df";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&lang=${lang}`;

  if (lang == "en" || lang == "") {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    localStorage.setItem("current_weather", JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
  }
  callBack(JSON.parse(localStorage.getItem("current_weather")!));
};
