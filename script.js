const APIKey = "9872d12ecf97f76396a32c6e1423b09d";
const url = "https://api.openweathermap.org/data/2.5/weather";
const button = document.getElementById("searchButton");
const weatherCard = document.getElementsByClassName("weather-data")[0];
const contentContainer = document.getElementsByClassName("content")[0];
const search = document.getElementById("searchInput");

button.addEventListener("click", function () {
  let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${APIKey}`;
  document.getElementsByClassName("weather-card")[0].remove();
  document.getElementsByClassName("weather-get")[0].remove();
  if (!search.value) {
    const createWarningCard = () => {
      const noInputCard = document.createElement("div");
      noInputCard.innerHTML = `<h1 class="text-3xl font-sans font-bold uppercase text-center">Search any city ...</h1>`;
      noInputCard.classList.add("warning-card", "text-sky-950", "animate-show");
      return noInputCard;
    };
    return contentContainer.insertBefore(createWarningCard(), weatherCard);
  } else {
    document.getElementsByClassName("warning-card")[0].remove();
    async function fetching() {
      try {
        const response = await fetch(urlAPI);
        const weather = await response.json();

        weatherCard.innerHTML = `<div class="animate-show weather-get">
                            <h1 class="text-3xl font-sans font-bold uppercase text-center mt-5 ">${
                              weather.name
                            }
                                <span>,${weather.sys.country}</span>
                            </h1>
                            <div class="w-[200px] mr-auto ml-auto mt-4">
                                <img src="img/cloudy.png" alt="" class="w-full">
                            </div>
                            <div class="flex justify-center content-center  mt-5">
                                <h1 class="text-center font-mono font-extrabold text-9xl">${Math.round(
                                  weather.main.temp - 273.15
                                )}
                                </h1>
                                <div class="text-5xl font-mono font-extrabold">°C
                                </div>
                            </div>
                            <div class="text-center flex flex-row justify-center gap-5 font-bold  mt-5">
                                <p><i class="fa-solid fa-signal mr-2"></i>${
                                  weather.weather[0].main
                                }</p>
                                <p><i class="fa-solid fa-droplet mr-2"></i>${
                                  weather.main.humidity
                                } %</p>
                                <p><i class="fa-solid fa-wind mr-2"></i>${
                                  weather.wind.speed
                                } km/h</p>
                            </div>
                        </div>`;
      } catch (error) {
        weatherCard.innerHTML = `<div class="animate-show weather-get">
                            <h1 class="text-3xl font-sans font-bold uppercase text-center mt-5 ">
                                City Not Found
                            </h1>  
                        </div>`;
        console.log("error");
      }
    }
    fetching();
  }
});
const getData = (searchInput = "") => {
  let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${APIKey}`;

  if (searchInput == 0) {
    const createWarningCard = () => {
      const noInputCard = document.createElement("div");
      noInputCard.innerHTML = `<h1 class="text-3xl font-sans font-bold uppercase text-center">Search any city ...</h1>`;
      noInputCard.classList.add("warning-card", "text-sky-950", "animate-show");
      return noInputCard;
    };

    return contentContainer.insertBefore(createWarningCard(), weatherCard);
  } else {
    if (document.getElementsByClassName("warning-card")[0])
      document.getElementsByClassName("warning-card")[0].remove();
  }
  async function fetching() {
    try {
      const response = await fetch(urlAPI);
      const weather = await response.json();
      weatherCard.innerHTML = `<div class="animate-show weather-get">
                                  <h1 class="text-3xl font-sans font-bold uppercase text-center mt-5 ">${
                                    weather.name
                                  }
                                      <span>,${weather.sys.country}</span>
                                  </h1>
                                  <div class="w-[200px] mr-auto ml-auto mt-4">
                                      <img src="img/cloudy.png" alt="" class="w-full">
                                  </div>
                                  <div class="flex justify-center content-center  mt-5">
                                      <h1 class="text-center font-mono font-extrabold text-9xl">${Math.round(
                                        weather.main.temp - 273.15
                                      )}
                                      </h1>
                                      <div class="text-5xl font-mono font-extrabold">°C
                                      </div>
                                  </div>
                                  <div class="text-center flex flex-row justify-center gap-5 font-bold  mt-5">
                                      <p><i class="fa-solid fa-signal mr-2"></i>${
                                        weather.weather[0].main
                                      }</p>
                                      <p><i class="fa-solid fa-droplet mr-2"></i>${
                                        weather.main.humidity
                                      } %</p>
                                      <p><i class="fa-solid fa-wind mr-2"></i>${
                                        weather.wind.speed
                                      } km/h</p>
                                  </div>
                              </div>`;
    } catch (error) {
      weatherCard.innerHTML = `<div class="animate-show weather-get">
                            <h1 class="text-3xl font-sans font-bold uppercase text-center mt-5 ">
                                City Not Found
                            </h1>  
                        </div>`;
    }
  }
  fetching();
};
getData();

function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const onInput = debounce(getData, 1000);

const input = search.addEventListener("input", function (e) {
  onInput(e.target.value);
  if (document.getElementsByClassName("weather-card")[0])
    document.getElementsByClassName("weather-card")[0].remove();
  document.getElementsByClassName("weather-get")[0].remove();
});
