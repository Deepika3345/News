import React, { useContext, useEffect, useState } from 'react'
import NewsContext from '../Context/NewsContext'
import { WeatherApi } from '../Context/NewsAction'

const Weather = () => {
  const { weatherinfo, dispatch } = useContext(NewsContext)
  console.log(weatherinfo)
  const [find, setFind] = useState("")
  const getWeather = async (city) => {
    const info = await WeatherApi(city)

    dispatch({
      type: "WEATHER",
      payload: info,
    })
    useEffect(() => {
      getWeather("indore")
    }, []);
  }

  const WeatherSearch = (e) => {
    e.preventDefault()
    getWeather(find)
    setFind("")

  }

  if (!weatherinfo) {
    return (
      <h1>Loading..</h1>

    )
  }
  return (
    <>
      <div className='weather-container'>
        <div className="cardContainer">
          <div className="card-weather">
            <p className="city"> {weatherinfo.location.name}</p>
            <p className="weather">{weatherinfo.current.condition.text}</p>

            <img src={weatherinfo.current.condition.icon} alt="" />
            <image
              id="image0"
              width="100"
              height="100"
              x="0"
              y="0"
              src={weatherinfo.current.condition.icon}

            ></image>

            <p className="temp">{weatherinfo.current.temp_c}°</p>
            <div className="minmaxContainer">
              <div className="min">
                <p className="minHeading">Lat</p>
                <p className="minTemp"> {weatherinfo.location.lat}°</p>
              </div>
              <div className="max">
                <p className="maxHeading">Lon</p>
                <p className="maxTemp">{weatherinfo.location.lon}</p>
              </div>
            </div>
            <form onSubmit={WeatherSearch} className='form-section'>
              <input type="text" placeholder='Search' className='form-control input '
                value={find}
                onChange={(e) => setFind(e.target.value)}
              />
              {/* <button className="btn btn-sm btn-success ">Search</button> */}
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Weather