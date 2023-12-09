import { APIKey } from "./token.js";
const url = "https://api.openweathermap.org/data/2.5/weather";
const fetchingData = (searchInput) => {
  const urlQuery = `${url}?q=${searchInput}&appid=${APIKey}`;
  return new Promise((resolve, reject) => {
    fetch(urlQuery)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
export default fetchingData;
