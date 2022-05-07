const SERVERURL = "http://api.openweathermap.org/data/2.5/weather";
const APIKEY = "f660a2fb1e4bad108d6160b7f58c555f";

const searchArea = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__icon");
const temperature = document.querySelector(".now__temperature .temperature__value");
const weatherImg = document.querySelector(".now__img");
const currentCity = document.querySelector(".now__city span");

export { SERVERURL, APIKEY, searchArea, searchBtn, temperature, weatherImg, currentCity };
