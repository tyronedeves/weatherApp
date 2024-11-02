 'use strict'
const apiKey = '8b47583770e6e49d0e5df4a7ec2749c9'

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImage = document.getElementById('tempImage');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax')
const tempMin = document.getElementById('tempMin')

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let dateObj = new Date();
  let month = monthNames[dateObj.getUTCMonth()];
  let day = dateObj.getUTCDate() - 1;
  let year = dateObj.getUTCFullYear();
  
  date.innerHTML = `${month} ${day}, ${year}`;
  

  const app = document.getElementById('app');

  const getWeather = async () => {
    try{

        const cityName = document.getElementById('searchBarInput').value
        const weatherDataFetch =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`, {
            headers: {
                Accept: 'application/json'
            }
        });

        const weatherData = await weatherDataFetch.json();
        console.log(weatherData)

        city.innerHTML = `${weatherData.name}`;
        tempImage.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C<h/2>`
        tempMax.innerHTML = `${weatherData.main.temp_max}`
        tempMin.innerHTML = `${weatherData.main.temp_min}`

        }
        catch(error){
            console.log(error)
    }
  }
