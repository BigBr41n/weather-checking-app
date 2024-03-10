
 //api Key and apiUrl


 const apiKey = "1d8bf9ea570d1f941f22343f368e4b31" ;
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
 
 
 
 
 //some Nodes from DOM api
 
 
 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 const weatherIcon = document.querySelector(".weather-icon");
 
 
 // the main function of checking weather 
 
 
 
 async function checkWeather(city){
 
     // calling the api with the name of city 
 
     const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
 
 
     // checking for invalid names of cities 
 
     if(response.status == 404){
         document.querySelector(".error").style.display = "block"; 
         document.querySelector(".weather").style.display = "none"; 
     }
 
     // changing tags content bassed on the response data 
 
     else {
         var data = await response.json(); 
         document.querySelector(".city").innerHTML = data.name;        
         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
         document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
         document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"; 
         updateImage(data.weather[0].main); 
     } 
 
 
 
 }
 
 //function of updating images based on the weather status "cloudy , mist , snow , rain ..."
 
 function updateImage(weather){
     switch(weather){
         case "Clouds":
             weatherIcon.src = "images/clouds.png";
             break; 
         case "Clear":
             weatherIcon.src = "images/clear.png";
             break; 
         case "Rain":
             weatherIcon.src = "images/rain.png";
             break; 
         case "Drizzle":
             weatherIcon.src = "images/drizzle.png";
             break;
         case "Mist":
             weatherIcon.src = "images/mist.png";
             break; 
     }
 
 
     document.querySelector(".weather").style.display = "block"; 
     document.querySelector(".error").style.display = "none"; 
 }
 
 
 
 
 // calling the main function using click or Enter 
 
 searchBtn.addEventListener("click",()=>{
     checkWeather(searchBox.value);
 })
 searchBox.addEventListener("keydown",(event)=>{
     if(event.key === "Enter"){
         checkWeather(searchBox.value); 
     }
 })
 