import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data, navName } from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <article className="container">
      <nav>nav</nav>
      <menu>
        {navName.map(({ id, name }) => {
          return (
              <button key={id} className="btn">{name}</button>
          );
        })}
      </menu>
      <section>
        <div className="email">
          {data.map(({ id, btnName }) => {
            return (
              <div className='email__details' key={id}>
                {btnName}
              </div>
            );
          })}
        </div>
      </section>
      <main>email view</main>
      <aside>additional info</aside>
    </article>
  );
}

export default App
