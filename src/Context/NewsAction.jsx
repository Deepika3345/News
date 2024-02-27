export const FetchNews = async (topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=c00f316ae51e45039ee8d5f1498e5d4b`)
    const data = await response.json()
    return data.articles;
}
export const WeatherApi = async (city) => {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=1b430e671637441ba65114324230112&q=${city}&aqi=yes`)
    const info = await res.json()
    return info
}


