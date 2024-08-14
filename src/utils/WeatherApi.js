import log from "./logger";
import  {weatherAPIData}  from "./Constants";


//const latitude = 32.779167;
//const longitude = -96.80889;
//const APIkey = "9ed2af8b44ccce6e0959621de59c2764";
//const apiRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;
//const apiRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${weatherAPIData.APIkey}`;

// use lat and long from browser location
export const getForecastWeather = (latitude, longitude) => {
  console.log("!! WeatherAPI");
  const apiRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${weatherAPIData.APIkey}`;

  const weatherApi = fetch(apiRequest).then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
  });

  return weatherApi;
};
/*export const getForecastWeather = () => {
  console.log("!! WeatherAPI")
  const weatherApi = fetch(apiRequest).then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
  });

  return weatherApi;
};*/Í


/*
export const parseWeatherData = (data) => {
  console.log(data);
  const weatherMain = data.main;
  const weatherTemp = weatherMain && weatherMain.temp;
  //console.log("!!weatherMain:", Math.ceil(weatherTemp));

  const weather = {
    weatherTemp: {
      F: Math.round(weatherTemp),
      C: Math.round((weatherTemp - 32) * 5 / 9)
    }
  };
  console.log("weather:", weather);
  return (weather);*/

  export const parseWeatherData = (data) => {
    log(data);
    const weatherMain = data.main;
    const weatherTemp = weatherMain && weatherMain.temp;
    log("!!weatherMain:", Math.ceil(weatherTemp));
    return Math.ceil(weatherTemp);

};

// weather.temperature.F = data.main.temp);
// weather.temperature.C = Math.round((data.main.temp - 32) * 5/9)};