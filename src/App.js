import React, { Component } from 'react'
import Weather from './Components/Weather'
import WeatherData from './Components/WeatherData'
import './index.css';
import 'tachyons'





const apikey = "638e10fa0355fe08af8c6d4076f8da62"

export class App extends Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      maindescription: '',
      description: '',
      temperature: 0,
      maxtemp: 0,
      mintemp: 0,
      realfeel: 0,

    };
   console.log(this.state)
  }


  componentDidMount() {
    this.getWeather();


  }

  componentDidUpdate() {
    if(this.state.country == 'US') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Denver,US&appid=${apikey}`)
      .then(response => response.json())
     
      .then(data => this.setState({
        city: data.name,
        country: data.sys.country
        
      }));
    }
  }
//handle functions

temperatureConversion = (num) => {
    let temperatureObj = {fahren : '', celcius:''}
    temperatureObj.fahren = (Math.floor(((num-273.15))*1.8+32));
    temperatureObj.celcius = (Math.floor(num - 273.15))

   return temperatureObj;
}


  getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${apikey}`)
  .then(response => response.json())  
  .then(data => this.setState({
    city: data.name,
    country: data.sys.country,
    maindescription: data.weather[0].main,
    description: data.weather[0].description,
    temperature:data.main.temp,
    maxtemp: data.main.temp_max,
    mintemp: data.main.temp_min,
    realfeel: data.main.feels_like,
    humidity: data.main.humidity,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    windspd: data.wind.speed,
    winddeg: data.wind.deg, 
  }));
  }


  render() {
    return (
      <div className="App">
      <Weather city={this.state.city} country={this.state.country} 
      maindescription={this.state.maindescription} description={this.state.description}
      temperature={this.state.temperature} realfeel={this.state.realfeel}maxtemp={this.state.maxtemp} mintemp={this.state.mintemp}  tempConversion={this.temperatureConversion}/>
      <WeatherData/>
  </div>
    )

}

}

export default App;
