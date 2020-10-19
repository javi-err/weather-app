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
            <div className="data-container">
                <div className="fl w-50 pa2">{this.props.dateConversion(this.state.sunrise)}</div>
                <div className="fl w-50 pa2">{this.state.sunset}</div>
                <div className="fl w-50 pa2">{this.state.humidity}</div>
                <div className="fl w-50 pa2">{this.state.windspd}</div>
                <div className="fl w-50 pa2">{this.state.winddeg}</div>
            </div>
        )
    }
}

export default WeatherData
