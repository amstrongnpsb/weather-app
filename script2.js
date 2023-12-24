import fetchingData from "./fetching.js";
import generateWeatherUI from "./weatherCard.js";
import generatePromptCard from "./prompCard.js";
import getTimeOfDay from "./timeConvert.js";
const search = document.getElementById("searchInput");
generatePromptCard();
const getData = async (searchInput = "") => {
  if (searchInput == 0) {
    generatePromptCard();
    document.getElementsByClassName("weather-get")[0].remove();
  } else {
    const response = await fetchingData(searchInput);
    await generateWeatherUI(response);
    const timeOfDay = await getTimeOfDay(response);
    console.log(response);
    document.getElementsByClassName("warning-card")[0].remove();
  }
};
function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
search.addEventListener(
  "input",
  debounce(function (e) {
    getData(e.target.value);
  }, 1000)
);
