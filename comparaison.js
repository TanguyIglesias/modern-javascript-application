export let comparaison = () => {
    let key = 'adc743d149ca38cafb6f5022f11f69dc';
    let city = document.querySelector("#input-town").value;
    let city2 = document.querySelector("#input-town2").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&mode=json&lang=fr`;
    let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${key}&units=metric&mode=json&lang=fr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (typeof data.main === 'undefined') {
                let error = "<h2 class='error'>Cette ville n'est pas répertoriée</h2>";
                document.querySelector('#meteo-curr').innerHTML = error;
                document.querySelector('#meteo-jour').innerHTML = "";
                document.querySelector('#meteo-week').innerHTML = "";
            }
            else {
                let comparaison = `
                <table>
                    <tr>
                        <th><h4>${data.name}</h4></th>
                    </tr>
                    <tr>
                        <td>Température: ${Math.floor(Math.round(data.main.temp))}°C</td>
                    </tr>
                    <tr>
                        <td>Température min/max: ${Math.floor(Math.round(data.main.temp_min))}°/${Math.floor(Math.round(data.main.temp_max))}°</td>
                    </tr>
                    <tr>
                        <td>Humidité: ${data.main.humidity}%</td>
                    </tr>
                    </table>`;
                document.querySelector('#table-city1').innerHTML = comparaison;
            }
        });
    fetch(url2)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (typeof data.main === 'undefined') {
                let error = "<h2 class='error'>Cette ville n'est pas répertoriée</h2>";
                document.querySelector('#meteo-curr').innerHTML = error;
                document.querySelector('#meteo-jour').innerHTML = "";
                document.querySelector('#meteo-week').innerHTML = "";
            }
            else {
                let comparaison = `
                <table>
                    <tr>
                        <th><h4>${data.name}</h4></th>
                    </tr>
                    <tr>
                        <td>Température: ${Math.floor(Math.round(data.main.temp))}°C</td>
                    </tr>
                    <tr>
                        <td>Température min/max: ${Math.floor(Math.round(data.main.temp_min))}°/${Math.floor(Math.round(data.main.temp_max))}°</td>
                    </tr>
                    <tr>
                        <td>Humidité: ${data.main.humidity}%</td>
                    </tr>
                    </table>`;
                document.querySelector('#table-city2').innerHTML = comparaison;
            }
        });
}