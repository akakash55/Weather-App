const api = {
    key: config.key,
    baseurl: config.baseurl
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(event) {
    if (event.keyCode === 13) { // enter key is pressed
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    let weatherCondition = weather.weather[0].main;
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weatherCondition;

    // var img = document.createElement("img");
    let icon = document.querySelector('.current .icon img');
    icon.src = ` http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

    
    // icon.appendChild(img);

    let highLow = document.querySelector('.current .high-low');
    highLow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    changeBackgroundImage(weatherCondition);

}

function dateBuilder(query) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[query.getDay()];
    let date = query.getDate();
    let month = months[query.getMonth()];
    let year = query.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

function changeBackgroundImage(weatherCondition) {
    if (weatherCondition === "Clouds") {
        document.body.style.backgroundImage = "url('images/cloud.jpg')";
    }
    else if (weatherCondition === "Clear") {
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
    }
    else if (weatherCondition === "Haze") {
        document.body.style.backgroundImage = "url('images/haze.jpg')";
    }
    else if (weatherCondition === "Snow") {
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    }
    else if (weatherCondition === "Mist") {
        document.body.style.backgroundImage = "url('images/mist.jpg')";
    }
    else if (weatherCondition === "Rain") {
        document.body.style.backgroundImage = "url('images/rain.jpg')";
    }
    else if (weatherCondition === "Smoke") {
        document.body.style.backgroundImage = "url('images/smoke.jpg')";
    }
    else if (weatherCondition === "Thunderstorm") {
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
    }
    else if (weatherCondition === "Drizzle") {
        document.body.style.backgroundImage = "url('images/drizzle.jpg')";
    }
    else if (weatherCondition === "Dust") {
        document.body.style.backgroundImage = "url('images/dust.jpg')";
    }
    else if (weatherCondition === "Fog") {
        document.body.style.backgroundImage = "url('images/fog.jpg')";
    }
    else if (weatherCondition === "Sand") {
        document.body.style.backgroundImage = "url('images/Sand.jpg')";
    }
    else if (weatherCondition === "Ash") {
        document.body.style.backgroundImage = "url('images/Ash.jpg')";
    }
    else if (weatherCondition === "Squall") {
        document.body.style.backgroundImage = "url('images/Squall.jpg')";
    }
    else if (weatherCondition === "Tornado") {
        document.body.style.backgroundImage = "url('images/Tornado.jpg')";
    }
}