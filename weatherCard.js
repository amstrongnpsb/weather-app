const generateWeatherUI = (weather) => {
  const weatherCard = document.getElementsByClassName("weather-data")[0];
  if (weather.cod == 200) {
    return (weatherCard.innerHTML = `<div class="animate-show weather-get">
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
                                    </div>`);
  }
  return (weatherCard.innerHTML = `<div class="animate-show weather-get">
                            <h1 class="text-3xl font-sans font-bold uppercase text-center mt-5 ">
                                City Not Found
                            </h1>  
                        </div>`);
};
export default generateWeatherUI;
