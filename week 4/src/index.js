//Feature #1 display the current date and time using Javascript

let currentTime = new Date();

let currentHour = currentTime.getHours();
let currentMintues = currentTime.getMinutes();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
if (currentMintues < 10) {
  currentMintues = `0${currentMintues}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[currentTime.getDay()];
let h3 = document.querySelector("h3");
h3.innerHTML = `${currentDay} ${currentHour}:${currentMintues}`;

// Feature #2: add search engine when searching for a city.
//Display the city name on the page after user submits the form

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleWeather");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Weather in ${city.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

//Bonus Feature: add link to convert Celsius to Fahrenheit
function convertToFarenheit(event) {
  event.preventDefault();
  let mainTemperature = document.querySelector("#main-temperature");
  mainTemperature.innerHTML = "80";
}

let toFahrenheit = document.querySelector("#fahrenheit-link");
toFahrenheit.addEventListener("click", convertToFarenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let mainTemperature = document.querySelector("#main-temperature");
  mainTemperature.innerHTML = "27";
}

let toCelsius = document.querySelector("#celsius-link");
toCelsius.addEventListener("click", convertToCelsius);
