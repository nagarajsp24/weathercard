const apiKey = "fa47d2d49e985f4ba9e45f7d4a084b1a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');

async function checkweather(city){
    const response = await fetch (`${apiUrl}${city}&appid=${apiKey}`);
    var data = await response.json();
    
    document.querySelector('.temp').innerHTML = data.main.temp + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images/Cloud.png"
    }   else if (data.weather[0].main == "clear"){
        weatherIcon.src =  "images/Sunny.png"
    }   else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/Rain.png"
    }   else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzel.png"
    }   else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
}

searchBtn.addEventListener( 'click', () =>{
    checkweather(searchBox.value);
})
