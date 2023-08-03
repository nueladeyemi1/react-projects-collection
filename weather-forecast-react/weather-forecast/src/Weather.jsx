import Day from './Day'

export const Weather = ({ data, displayLocation }) => {
  const {
    time,
    weathercode: weatherCode,
    temperature_2m_max: maxTemp,
    temperature_2m_min: minTemp,
  } = data

  return (
    <div>
      <h2>Weather {displayLocation.displayLocation}</h2>
      <ul className='weather'>
        {time?.map((date, i) => (
          <Day
            key={i}
            date={date}
            code={weatherCode[i]}
            maxTemp={maxTemp[i]}
            minTemp={minTemp[i]}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  )
}
