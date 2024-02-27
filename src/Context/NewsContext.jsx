import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext()

export const NewsProvider = ({ children }) => {

    const initialstate = {
        allnews: [],
        weatherinfo: {
            location: {
                name: "London", region: "City of London, Greater London",
                country: "United Kingdom",
                lat: 51.52, lon: -0.11,
                 localtime_epoch: 1701618970, 
                localtime: "2023-12-03 15:56"
            },
            current: {
                last_updated_epoch: 1701618300, last_updated: "2023-12-03 15:45", temp_c: 8.0, temp_f: 46.4, is_day: 0,
                condition: { text: "Partly cloudy", icon: "//cdn.weatherapi.com/weather/64x64/night/116.png", code: 1003 },
                wind_mph: 9.4, wind_kph: 15.1, wind_degree: 190, wind_dir: "S", pressure_mb: 1008.0, pressure_in: 29.77,
                precip_mm: 0.0, precip_in: 0.0, humidity: 93, cloud: 75, feelslike_c: 7.0, feelslike_f: 44.7, vis_km: 10.0, vis_miles: 6.0, uv: 2.0,
                gust_mph: 13.9, gust_kph: 22.3,
            }
        },

    }

    const [state, dispatch] = useReducer(NewsReducer, initialstate)

    return (
        <NewsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </NewsContext.Provider>
    )
}
export default NewsContext