import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Weather } from './Weather'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState({})
  const [countryCode, setCountryCode] = useState('')
  const [displayLocation, setDisplayLocation] = useState({})

  function convertToFlag(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt())

    return String.fromCodePoint(...codePoints)
  }

  useEffect(
    function() {
      if (inputValue.length < 3) return

      async function getWeather(location) {
        setIsLoading(true)
        try {
          // 1) Getting location (geocoding)
          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
          )
          const geoData = await geoRes.json()

          if (!geoData.results) throw new Error('Location not found')

          const {
            latitude,
            longitude,
            timezone,
            name,
            country_code,
          } = geoData.results.at(0)
          setCountryCode(country_code)

          setDisplayLocation({
            displayLocation: `${name} ${convertToFlag(country_code)}`,
          })

          // 2) Getting actual weather
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
          )
          const weatherData = await weatherRes.json()
          setData(weatherData.daily)
        } catch (err) {
          console.err(err)
        } finally {
          setIsLoading(false)
        }
      }
      getWeather(inputValue)
    },
    [inputValue]
  )

  return (
    <div className='app'>
      <h1>Classy Weather</h1>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter the area'
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {data?.weathercode && (
        <Weather data={data} displayLocation={displayLocation} />
      )}
    </div>
  )
}

export default App
