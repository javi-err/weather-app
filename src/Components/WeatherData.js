import React, { Component } from 'react'


const apikey = "638e10fa0355fe08af8c6d4076f8da62"

export class WeatherData extends Component {
    constructor(){
        super();
        this.state = {
            humidity: 0,
            sunrise: '',
            sunset: '',
            windspd: 0,
            winddeg: 0, 
        }
        
    }
    

    
    //handler functions
    getWeatherData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${apikey}`)
      .then(response => response.json())  
      .then(data => this.setState({
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        windspd: data.wind.speed,
        winddeg: data.wind.deg, 
      }));
      }

      componentDidMount() {
        this.getWeatherData();
    
    
      }
    render() {
        return (
            <div>
                {this.state.humidity}
            </div>
        )
    }
}

export default WeatherData
