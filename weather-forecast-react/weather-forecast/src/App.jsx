import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Weather } from './Weather'

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], '☀️'],
    [[1], '🌤'],
    [[2], '⛅️'],
    [[3], '☁️'],
    [[45, 48], '🌫'],
    [[51, 56, 61, 66, 80], '🌦'],
    [[53, 55, 63, 65, 57, 67, 81, 82], '🌧'],
    [[71, 73, 75, 77, 85, 86], '🌨'],
    [[95], '🌩'],
    [[96, 99], '⛈'],
  ])
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode))
  console.log(arr)
  if (!arr) return 'NOT FOUND'
  return icons.get(arr)
}

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('Nigeria')
  const [data, setData] = useState({})
  const [countryCode, setCountryCode] = useState('')
  const [displayLocation, setDisplayLocation] = useState({})

  function convertToFlag(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt())

    console.log(codePoints)
    return String.fromCodePoint(...codePoints)
  }

  function formatDay(dateStr) {
    return new Intl.DateTimeFormat('en', {
      weekday: 'short',
    }).format(new Date(dateStr))
  }

  useEffect(
    function() {
      setIsLoading(true)
      async function getWeather(location) {
        try {
          // 1) Getting location (geocoding)
          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
          )
          const geoData = await geoRes.json()
          console.log(geoData)

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

  const {
    temperature_2m_max: maximumTemp,
    temperature_2m_min: minimumTemp,
    time,
    weathercode,
  } = data

  getWeatherIcon(weathercode)
  convertToFlag(countryCode)
  console.log(weathercode)

  console.log(data)

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
      {weathercode && <Weather />}
    </div>
  )
}

export default App
