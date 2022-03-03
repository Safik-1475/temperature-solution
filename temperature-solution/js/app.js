
const api_key = '21600d22607678276860eca73204c7f4';
const searchTemperature = () => {
    const city_name = document.getElementById('city-name');
    const city = city_name.value;
    city.value = '';
    // city.value = '';
    // console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => temperatureDisplay(data))
}

const setInnerText = (id, text) => {
    const setCity = document.getElementById(id).innerText = text;
}

const temperatureDisplay = temperature => {
    // console.log(temperature)

    setInnerText('city', temperature.name)
    setInnerText('temDeg', temperature.main.temp)
    setInnerText('temp-condition', temperature.weather[0].main)
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const iconImage = document.getElementById('weather-icon')
    // console.log(iconImage)
    iconImage.setAttribute('src', url)

}