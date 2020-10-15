import React from 'react'

 const Weather = (props) => {
    return (
        <div>
            <div className="container pa5">
                <div className="weather-card flex flex-column tc">
                    <div className="weather-title">
                        <h1>{props.city}, {props.country}</h1>
                        <h5>Clear</h5>
                    </div>
                    <div className="temperature-container">
                        <div className="temperature">
                            <h1 className="degrees">{props.tempConversion(props.temperature)}&deg;</h1>
                            <span className="high pr2">H: 82&deg;</span>
                            <span className="low">L: 22&deg;</span>
                        </div>
                        </div>
                    </div>
                    <div className="weather-summary">
                        The weather in {props.city} is {props.description}
                    </div>
                </div>
            </div>
    )
}

export default Weather;