export let meteo = () => {
  let city = document.querySelector("#input-town").value;
  let key = "adc743d149ca38cafb6f5022f11f69dc";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&mode=json&lang=fr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (typeof data.main === "undefined") {
        let error = "<h2 class='error'>Cette ville n'est pas répertoriée</h2>";
        document.querySelector("#meteo-curr").innerHTML = error;
        document.querySelector("#meteo-jour").innerHTML = "";
        document.querySelector("#meteo-week").innerHTML = "";
      } else {
        let affichage = `<div class="cityName">
                <h2>${data.name}, ${data.sys.country}</h2>
                </div>
                <div class="cityTemp">
                <div class="icon">
                <img src="http://openweathermap.org/img/wn/${
                  data.weather[0].icon
                }.png"></img>
                </div>
                <div class="temps">
                <p>${Math.floor(Math.ceil(data.main.temp))} °C</p><p> ${
          data.weather[0].description
        }</p>
                </div>
                </div>`;
        document.querySelector("#meteo-curr").innerHTML = affichage;

        let windSpeed = Math.round(data.wind.speed * 3.6);
        let meteoAjd = `<ul>
                <li class="location">Météo aujourd'hui à ${data.name}, ${
          data.sys.country
        }</li>
                <li class="Tressenti"> <div class="Tressenti-temp">${Math.floor(
                  Math.ceil(data.main.temp)
                )} °</div> <div class="Tressenti-index"> T.ressentie</li>
                <li class="meteo"> 
                    <span class="iconify-inline" data-icon="fa-solid:temperature-high" style="color: black;" data-width="16" data-height="16"></span>
                    Min/Max: ${Math.floor(
                      Math.round(data.main.temp_min)
                    )}°/${Math.floor(Math.round(data.main.temp_max))}°</li>

                <li class="meteo"> <span class="iconify-inline" data-icon="wi:humidity" style="color: black;" data-width="16" data-height="16"></span>
                    Humidité: ${data.main.humidity}%</li>

                <li class="meteo">
                                <span class="iconify-inline" data-icon="bx:wind" style="color: black;" data-width="16" data-height="16"></span> Vent: 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" style="transform:rotate(${
                                  data.wind.deg
                                }deg)"> <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/> </svg> ${windSpeed} km/h</li>`;

        document.querySelector("#meteo-jour").innerHTML = meteoAjd;
      }
    });

  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=${key}&units=metric&mode=json&lang=fr`;
  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (typeof data.city === "undefined") {
        let error = "<h2 class='error'>Cette ville n'est pas répertoriée</h2>";
        document.querySelector("#meteo-curr").innerHTML = error;
        document.querySelector("#meteo-jour").innerHTML = "";
        document.querySelector("#meteo-week").innerHTML = "";
      } else {
        let prevision = `<header class="meteo-week"><h2>Prévision quotidienne</h2></header>
                        <div class="prevision-quotidienne">
                            <ul class="prevision-quotidienne-list">
                                <li><h3>Ajd</h3>
                                    <div class="prevision-quotidienne-ajd-max">${Math.floor(
                                      Math.round(data.list[0].main.temp_max)
                                    )}°</div>
                                    <div class="prevision-quotidienne-ajd-min">${Math.floor(
                                      Math.round(data.list[0].main.temp_min)
                                    )}°</div>
                                    <div class="prevision-quotidienne-ajd-icon"><img src="http://openweathermap.org/img/wn/${
                                      data.list[7].weather[0].icon
                                    }.png"></img></div>
                                </li>
                                <li><h3>Dem</h3>
                                    <div class="prevision-quotidienne-demain-max">${Math.floor(
                                      Math.round(data.list[1].main.temp_max)
                                    )}°</div>
                                    <div class="prevision-quotidienne-demain-min">${Math.floor(
                                      Math.round(data.list[1].main.temp_min)
                                    )}°</div>
                                    <div class="prevision-quotidienne-demain-icon"><img src="http://openweathermap.org/img/wn/${
                                      data.list[15].weather[0].icon
                                    }.png"></div>
                                </li>
                                <li><h3>2j</h3>
                                    <div class="prevision-quotidienne-apdem-max">${Math.floor(
                                      Math.round(data.list[2].main.temp_max)
                                    )}°</div>
                                    <div class="prevision-quotidienne-apdem-min">${Math.floor(
                                      Math.round(data.list[2].main.temp_min)
                                    )}°</div>
                                    <div class="prevision-quotidienne-apdem-icon"><img src="http://openweathermap.org/img/wn/${
                                      data.list[23].weather[0].icon
                                    }.png"></div>
                                </li>
                                <li><h3>3j</h3>
                                    <div class="prevision-quotidienne-3jours-max">${Math.floor(
                                      Math.round(data.list[3].main.temp_max)
                                    )}°</div>
                                    <div class="prevision-quotidienne-3jours-min">${Math.floor(
                                      Math.round(data.list[3].main.temp_min)
                                    )}°</div>
                                    <div class="prevision-quotidienne-3jours-icon"><img src="http://openweathermap.org/img/wn/${
                                      data.list[31].weather[0].icon
                                    }.png"></div>
                                </li>
                                <li><h3>4j</h3>
                                    <div class="prevision-quotidienne-4jours-max">${Math.floor(
                                      Math.round(data.list[4].main.temp_max)
                                    )}°</div>
                                    <div class="prevision-quotidienne-4jours-min">${Math.floor(
                                      Math.round(data.list[4].main.temp_min)
                                    )}°</div>
                                    <div class="prevision-quotidienne-4jours-icon"><img src="http://openweathermap.org/img/wn/${
                                      data.list[39].weather[0].icon
                                    }.png"></div>
                                </li>
                            </ul>
                        </div>`;

        document.querySelector("#meteo-week").innerHTML = prevision;
      }
    });
};
