const ImgElement=document.querySelector('img')
const inputElement=document.getElementById('location')
const submitButtonElement=document.querySelector('submit')
const tempDisplayElement=document.getElementById('temp-meter')
const locationDisplayElement=document.getElementById('location-meter')
const humidityDisplayElement=document.getElementById('humidity-meter')
const windSpeedDisplayElement=document.getElementById('windSpeed-meter')

inputElement.addEventListener('keydown',(event) => {
    if(event.key==="Enter")
    {
        getWeatherInfo()
    }
})


async function getWeatherInfo(){
    event.preventDefault();
    let input=document.getElementById('location').value 
    const response =await fetch(`http://api.weatherapi.com/v1/current.json?key=a3334826935444f2be9151011231212&q=${input}`,{mode:'cors'})
    const data=await response.json();
    console.log(data)

    const weatherCondtion=data.current.condition.text
    // const weatherCondtion="Windy"

    if(weatherCondtion === "Sunny")
    {
        ImgElement.src="/weather-application/images/Sunny.png"
    }
    else if(weatherCondtion === "Partly Cloudy")
    {
        ImgElement.src="/weather-application/images/PartlyCloudy.png"
    }
    else if(weatherCondtion === "Cloudy")
    {
        ImgElement.src="/weather-application/images/Cloudy.png"
    }
    else if(weatherCondtion === "Lightning")
    {
        ImgElement.src="/weather-application/images/Lightning.png"
    }
    else if(weatherCondtion === "Thunder Storm")
    {
        ImgElement.src="/weather-application/images/ThunderStorm.png"
    }
    else if(weatherCondtion === "Snowy")
    {
        ImgElement.src="/weather-application/images/Snowy.png"
    }
    else if(weatherCondtion === "Windy")
    {
        ImgElement.src="/weather-application/images/WIndy.png"
    }
    else if(weatherCondtion === "Mist")
    {
        ImgElement.src="/weather-application/images/Mist.png"
    }
    
   
    
    
    tempDisplayElement.innerHTML=data.current.temp_c+`&deg;C`

    locationDisplayElement.innerHTML=data.location.name+""

    humidityDisplayElement.innerHTML=data.current.humidity+"%"

    windSpeedDisplayElement.innerHTML=data.current.wind_kph+" km/h"

    

    document.getElementById('location').value='';
}







// //using promises
// function getWeatherInfo(){
//     event.preventDefault();
//     let input=document.getElementById('location').value 
//     fetch(`http://api.weatherapi.com/v1/current.json?key=a3334826935444f2be9151011231212&q=${input}`,{mode:'cors'})
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(response){
//         console.log(response.current.temp_c)
//     })
//     .catch(error => console.error('Error fetching data:', error));
    
// }











