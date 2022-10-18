const verClima = async() => {
    let apikey = "47265cf81eeccf30779e2d35719350ed"
    let divRes = document.querySelector("#res");
    if (navigator.geolocation) {
        var success = async function(position) {
            var latitud = position.coords.latitude,
                longitud = position.coords.longitude;
            console.log("Latitud: " + latitud + ", Longitud:" + longitud);
            let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric&lang=es`;
            console.log(url);
            const api = await fetch(url);
            const data = await api.json();
            console.log(data);
            const urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            divRes.innerHTML = `            
            <h1>${data.name.toUpperCase()} MX</h1> 
            <h2>${data.weather[0].description.toUpperCase()}</h2>
            <p>Temperatura: ${data.main.temp} °C</p>
            <img src="${urlIcon}">
            <p>feels_like: ${data.main.feels_like} °C</p>
            <p>Temperatura minima: ${data.main.temp_min} °C</p>
            <p>Temperatura maxima: ${data.main.temp_max} °C</p>
            <p>MIN:${data.main.temp_min} °C</p>
            <p>Humedad:${data.main.humidity}</p>
            <p>Pressure:${data.main.pressure}</p>
            `;
        }
        navigator.geolocation.getCurrentPosition(success, function(msg) {
            console.error(msg);
        });
    }

}