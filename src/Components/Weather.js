import React from 'react'



 const Weather = (props) => {
   const convertedTemps = {
        currfahrenheit: props.tempConversion(props.temperature).fahren,
        hifahrenheit: props.tempConversion(props.maxtemp).fahren,
        minfahrenheit: props.tempConversion(props.mintemp).fahren,
        realfeelfahrenheit: props.tempConversion(props.realfeel).fahren
 
    }

    return (
        
        <div>
            <div className="container pa5">
                <div className="weather-card">
                    <div className="weather-title">
                        <h1>{props.city}, {props.country}</h1>
                        <h5>{props.maindescription}</h5>
                    </div>
                    <div className="temperature-container">
                        <div className="temperature">
                            <h1 className="degrees">{convertedTemps.currfahrenheit}&deg;</h1>
                            <span className="high pr2">{convertedTemps.hifahrenheit}&deg;</span>
                            <span className="low">{convertedTemps.minfahrenheit}&deg;</span>
                        </div>
                        </div>
                    </div>
                    <div className="weather-summary">
                        <p>The weather in {props.city} is {props.description}. With the real feel currently being {convertedTemps.realfeelfahrenheit}&deg; </p>
                    </div>
                </div>
            </div>
    )
}

export default Weather;