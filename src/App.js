import axios from "axios";
import { useState } from "react";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2f14f501f051bd4ca2a49de6d5cbc430`

  const searchLocation = (event) => {
    if (event.key === "Enter")
      axios.get(url).then((response) => {
        setData(response.data)
      })
  }

  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={handleChange}
          type="text"
          placeholder="Enter location"
          onKeyPress={searchLocation} />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.name}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>



          {data.name != null && <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()} °F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>}

        </div>
      </div>
    </div>
  );
}

export default App;
