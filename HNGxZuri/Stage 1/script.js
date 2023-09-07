// Element selection
const currentDay = document.querySelector('.current__day')
const currentUTCTime = document.querySelector('.curent__UTC__Time')

//Handling time changes
setInterval(() => {
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
  currentDay.innerHTML = theWeek
  currentUTCTime.innerHTML = `${
    hour < 10 ? hour.toString().padStart(2, 0) : hour
  }:${minutes < 10 ? minutes.toString().padStart(2, 0) : minutes}:${
    seconds < 10 ? seconds.toString().padStart(2, 0) : seconds
  }`
}, 1000)
