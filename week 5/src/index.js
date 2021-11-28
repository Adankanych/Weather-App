let apiKey = "8f92bcf1448991b5fa444b563468f01b";
let city = "Sydney";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function displayWeather(response) {
  console.log(response);
  let weatherDiv = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);

  weatherDiv.innerHTML = `It is ${temperature} degree in ${response.data.name}`;
}

axios.get(url).then(displayWeather);
