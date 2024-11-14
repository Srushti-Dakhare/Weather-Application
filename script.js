const apikey= "d00f865df5d1558ff78d7c289b32dbd0";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let card = document.querySelector(".card");
let text = document.querySelector(".text");
const d = new Date();

async function checkWeather(city){
    let response= await fetch(apiUrl + city + `&appid=${apikey}`);    
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML =  data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+'°c'
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%'
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h'
    document.querySelector(".date").innerHTML = d.toLocaleDateString();
    document.querySelector(".time").innerHTML = d.toLocaleTimeString();
    document.querySelector(".weather-condition").innerHTML = data.weather[0].main;


    if(data.weather[0].main =='Clouds')
    {
        weatherIcon.src ="https://gifdb.com/images/high/cartoon-sun-and-clouds-wra8xbmuaiwosx2s.gif"
        card.style.backgroundImage="url('images/clouds.jpg')"
        
    }
    else if(data.weather[0].main =='Rain')
        {
            weatherIcon.src ="images/rain.gif"
            card.style.backgroundImage="url('images/rain.jpg')"
           
        }
        else if(data.weather[0].main =='Snow')
        {
            weatherIcon.src ="htps://i.pinimg.com/originals/ef/cb/32/efcb32336ce5c99993a2cebc6289311f.gif"
            card.style.backgroundImage="url('images/snow.jpg')"
        }
        else if(data.weather[0].main =='Mist')
            {
                weatherIcon.src ="images/mist.gif"
                card.style.backgroundImage="url('images/mist.jpg')"
            }
        else if(data.weather[0].main =='Clear')
        {
            weatherIcon.src ="images/clear.gif"
            card.style.backgroundImage="url('images/clear.jpg')"
        }
        else if(data.weather[0].main =='Drizzle')
        {
            weatherIcon.src ="images/drizzle.gif"
            card.style.backgroundImage="url('images/drizzle.jpg')"
        }
        else if(data.weather[0].main =='Haze')
            {
                weatherIcon.src ="https://i.pinimg.com/originals/47/5d/c9/475dc9e489a44721f7830ed92307480f.gif"
                card.style.backgroundImage="url('images/haze.jpg')"
            }

            document.querySelector(".weather").style.display="block"
    
        
        }       
searchButton.addEventListener('click',()=>{
    checkWeather(searchBox.value);
});
searchBox.addEventListener('keydown',(event)=>{
    if(event.key ==='Enter'){
            checkWeather(searchBox.value);
        
    }
})