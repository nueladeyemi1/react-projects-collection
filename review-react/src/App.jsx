import React, { useState } from 'react'
import reviews from './data'
import Reviews from './Reviews';

function App() {
  

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
          <Reviews />
        </div>
      </section>
    </main>
  );
}

export default App
