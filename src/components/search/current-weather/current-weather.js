import "./current-weather.css"

function convert(time) {
    const now = new Date();
    const adjustedTime = new Date(now.getTime() + time * 1000);
    const hours = adjustedTime.getHours() - 1;
    const minutes = adjustedTime.getMinutes();
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const localTimeHHMM = `${formattedHours}:${formattedMinutes}`;

    return `${localTimeHHMM}`
}

const CurrentWeather = ({data}) => {

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src= {`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-row">Details:</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-row">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-row">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-row">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-row">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
            <div className="time">
                <span className="time">Local time:</span>
                <span className="time-value">{convert(data.timezone)}</span>
            </div>
        </div>
    );
}

export default CurrentWeather;