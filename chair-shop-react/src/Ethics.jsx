import React from 'react'
import { ethicsData } from './data';

const Ethics = () => {
  return (
    <section>
      <h2>What makes our chairs special</h2>
      <div className="grid-3-cols">
        {ethicsData.map(({ id, title, content, icons }) => {
          return (
            <div key={id}>
                {icons}
              <p className="features__title">{title}</p>
              <p className="features__text">{content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Ethics