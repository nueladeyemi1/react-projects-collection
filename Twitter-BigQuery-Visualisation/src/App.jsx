import { useState } from 'react'
import { navContent } from './content'
import './App.css'
import { DoughnutComponent } from './Pie'
import { theDatas } from './Data'
import { HorizontalBar } from './HorizontalBar'
// import Example from './Res'

function App() {
  const [charts, setCharts] = useState(theDatas[0])

  console.log(charts)

  const onRedirect = function(url) {
    window.location.replace(url)
  }

  return (
    <main className='container'>
      {/* <section className="top__header"></section> */}
      {/* <article className="nav__container">
        <nav className="nav__content">
          <h3>Twitter BigQuery</h3>
          <div className="link">
            {navContent.map(({ id, name, url }) => {
              return (
                <div className='btn__links' key={id}>
                  <button className='btn__link' onClick={()=>onRedirect(url)}>{name}</button>
                </div>
              );
            })}
          </div>
        </nav>
      </article> */}
      {/* <RenderActiveShape /> */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          margin: '50px auto',
        }}
      >
        <label>Choose statistics to view:</label>
        <select
          value={charts}
          onChange={(event) => {
            setCharts(() => {
              return theDatas[event.target.value]
            })
            console.log(event.target.value)
          }}
          name='visualisation'
          id='visualisation'
          style={{ padding: '10px', border: 'none' }}
        >
          {theDatas.map(({ id, title }) => {
            return (
              <option key={id} value={id - 1}>
                {title}
              </option>
            )
          })}
        </select>
      </section>

      <div className='pie__container'>
        <section style={{ paddingTop: '60px' }}>{charts.chart}</section>
      </div>
      {/* <Example /> */}
      {/* <HorizontalBar /> */}
    </main>
  )
}

export default App
