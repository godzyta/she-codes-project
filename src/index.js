//Feature 1

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()]; //Sunday
let date = now.getDate(); //28
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let hours = now.getHours();
let minutes = now.getMinutes();
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
h1.innerHTML = `${day} ${date}th ${month}`;
h2.innerHTML = `${hours}:${minutes}`;

//Feature 2
function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  let cityDetail = document.querySelector("#id-city-detail");
  let h3 = document.querySelector("h3");
  cityDetail.innerHTML = `${cityInput.value}`;
  h3.innerHTML = `Check ${cityInput.value} radar`;
}

let cityForm = document.querySelector("#form");
cityForm.addEventListener("submit", showCity);
