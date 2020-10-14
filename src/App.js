import React, { Component } from 'react'
import Weather from './Components/Weather'
import './index.css';
import 'tachyons'





const apikey = "638e10fa0355fe08af8c6d4076f8da62"

export class App extends Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined
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

  getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${apikey}`)
  .then(response => response.json())
  .then(data => this.setState({
    city: data.name,
    country: data.sys.country
    
  }));
  }


  render() {
    return (
      <div className="App">
      <Weather city={this.state.city} country={this.state.country}/>
  </div>
    )

}

}

export default App;
