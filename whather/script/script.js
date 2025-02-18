const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "d6fb4e4843a7bb3b97bf0522bfd465e3";

const searchBox = document.querySelector('.search-barre input');
const searchBtn = document.querySelector('.search-barre button');
const weatherIcon = document.querySelector('.weather-icon');

const checkWeather = async (city) => {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('#city-name').style.display = "none";
        document.querySelector('#weather-icon').style.display = "none"
        document.querySelector('.weather-info').innerHTML = '';
    } else {
        const data = await response.json();
        console.log(data);

        document.querySelector('.error').style.display = "none";
        document.querySelector('#city-name').style.display = "block";

        document.querySelector('#city-name').textContent = data.name;
        // Add more elements to update based on the weather data
         document.querySelector('#temp').innerHTML = data.main.temp + "°C";
         document.querySelector('#wind-speed').innerHTML = data.wind.speed + "Km/h";
         document.querySelector('#humidity').innerHTML = data.main.humidity + "%";
         document.querySelector('#weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        //  document.querySelector('#weather-desc').textContent = data.weather[0].description;
         
    }
}

searchBtn.addEventListener('click', () => {
    const name_Of_City = searchBox.value;
    checkWeather(name_Of_City);
});
