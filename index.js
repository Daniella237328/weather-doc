let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let weatherDate = document.querySelector("#weatherCurrentDate");
weatherDate.innerHTML = `${days[now.getDay()]} ${
  months[now.getMonth()]
} ${now.getDate()}, ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;

function searchBtn(event) {
  event.preventDefault();
  let newSearchedCity = document.querySelector("#new-city-input");
  let currentCity = document.querySelector("#result-city");
  currentCity.innerHTML = `${newSearchedCity.value}`;
}

let newCity = document.querySelector("#search-city-form");
newCity.addEventListener("submit", searchBtn);

function changeCelsius() {
  let newTempCelsius = document.querySelector("#currentTemp");
  newTempCelsius.innerHTML = "☀️32";
}
let celsiusTemp = document.querySelector("#c-unit");
celsiusTemp.addEventListener("click", changeCelsius);

function changeF() {
  let newTempF = document.querySelector("#currentTemp");
  newTempF.innerHTML = "☀️80";
}
let fTemp = document.querySelector("#f-unit");
fTemp.addEventListener("click", changeF);
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
//search engine
function searchCity(city) {
  let apiKey = "6dd78a328e9537bf5174007ab364d668";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function displayWeatherCondition(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#currentTemp");
  tempElement.innerHTML = `${temperature}°F`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
}
function searchForm(event) {
  event.preventDefault();
  let city = document.querySelector("#new-city-input").value;
  searchCity(city);
}
let form = document.querySelector("#search-city-form");
form.addEventListener("submit", searchForm);

function showPosition(position) {
  let apiKey = "6dd78a328e9537bf5174007ab364d668";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentLocation(showPosition);
}
let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("submit", getCurrentLocation);
