function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let pressureElement = document.querySelector("#pressure");
  pressureElement.innerHTML = response.data.temperature.pressure;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data);
}

let apiKey = "4aof9ee43493t03092f5abdcf7d5bf5d";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Kyiv&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
