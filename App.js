
import './App.css';
import React ,{useState}from 'react'
const api={
  key:"9febc67f567aa3eb6f4c37a1774e9007",
  base:"http://api.openweathermap.org/data/2.5/"
}

function App() {
const[query,setQuery]=useState('');
const [weather,setWeather]=useState('');
const search=evt=>{
 if(evt.key==="Enter") {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res=>(res.json()))
    .then(result=>
      {
        setQuery('');
        setWeather(result);
        console.log(result);
      })
  }
}
  const dateBuilder=(d)=>{
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day=days[d.getDay()]  ;
let date=d.getDate();
let month=months[d.getMonth()];
let year=d.getFullYear();
return `${day} ${date} ${month} ${year}`
}
  return (
    <div className={(typeof weather.main!="undefined")?
    ((weather.main.temp>16)?'App warm':'App')
    :'App'}>

        <main>
           
          <div className="search-box"> 
            
            <input type="text" className="search-bar" placeholder="Enter City Name to Search .." onChange={e=>setQuery(e.target.value)} 
            value={query} onKeyPress={search}/>
       </div>
              {(typeof weather.main!="undefined")?(
           <div> 
             
                <div className="location-box">
                  <div className="location">{weather.name} ,{weather.sys.country}</div>
                  
                  <div className="date">{dateBuilder(new Date())} </div>
                </div>

                <div className="weather-box">
                  <div className="temp"> {Math.round(weather.main.temp)}°C</div>
                  <div className="temp">
                  <div className="weatherInfo"> Feels like {Math.round(weather.main.feels_like)}°C </div>
                  <div className="weatherInfo">Min temp {Math.round(weather.main.temp_min)}°C </div>
                  <div className="weatherInfo">Max temp {Math.round(weather.main.temp_max)}°C </div>
                  <div className="weatherInfo">Wind speed {weather.wind.speed} </div>
                  </div>
                  <div className="weather">{weather.weather[0].main} </div>
                
                 <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="new"></img>
                </div>
                

             </div>  ):('')}
        </main>
    </div>
  );
}

export default App;
