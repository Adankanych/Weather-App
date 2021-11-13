let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  san francisco: {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let enterCity = prompt("Enter a city?");
enterCity = enterCity.toLowerCase;
enterCity = enterCity.trim();

if (weather[enterCity] !== undefined) {
  alert (`It is currently ${Math.round(weather[enterCity].temp)} in ${enterCity} with a humidity of ${weather[enterCity].humidity}%`),
} else {
  alert (`https://www.google.com/search?q=weather+sydney`);
};


