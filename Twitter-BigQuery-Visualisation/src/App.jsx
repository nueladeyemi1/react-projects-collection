import { useState } from 'react'
import { navContent } from './content';
// import RenderActiveShape from './Graphs';
import './App.css'
import Pie from './Pie';

function App() {
  const [count, setCount] = useState(0)

  const onRedirect = function (url) {
     window.location.replace(url);
  }


  return (
    <main className="container">
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
      <Pie />
    </main>
  );
}

export default App
