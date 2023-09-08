// Element selection
const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]')

function theUTCTime() {
  let theWeek, date

  date = new Date()

  theWeek = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(date)

  //get hours, minutes and seconds
  const hour = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  const seconds = date.getUTCSeconds()

  //DOM  manipulation
  currentDay.textContent = theWeek

  // currentUTCTime.innerHTML = `${
  //   hour < 10 ? hour.toString().padStart(2, 0) : hour
  // }:${minutes < 10 ? minutes.toString().padStart(2, 0) : minutes}:${
  //   seconds < 10 ? seconds.toString().padStart(2, 0) : seconds
  // } UTC`

  currentUTCTime.textContent = `${date.getTime()} UTC`
}

//Handling time changes
setInterval(() => {
  theUTCTime()
}, 1000)
