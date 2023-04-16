import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div>LOGO</div>
            <div>NAVIGATION</div>
          </nav>
        </div>
        <div className="header__container">
          <div className="header__inner__container">
            <h1>A healty meal delivered to your door, every single day</h1>
            <p>
              The smart 365-days-per-year food subscription that will make you
              eat healty algain. Tailored to your personal tastes and
              nutritional needs
            </p>
            <a className="btn" href="#">
              Start eating well
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <h2>Some random heading</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            quis, dolorum voluptas rem consectetur iusto? Esse similique hic,
            laboriosam minima non veniam deleniti quibusdam eius maiores, illum,
            quaerat blanditiis nemo? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quo, omnis eum? Ipsa quam dolore nulla ipsum at
            delectus ipsam sequi esse. Similique facilis, unde hic molestias
            amet quos accusantium eos.
          </p>
        </div>
      </section>
    </>
  );
}

export default App
