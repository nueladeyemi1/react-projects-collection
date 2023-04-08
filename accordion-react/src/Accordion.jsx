import React, {useState} from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Accordion = ({id, title, text, list }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <figure>
      <div className={clicked ? 'accordion__active' : 'accordion__title'}>
        <p className={clicked ? 'active' : 'number'}>{`${id}`.padStart(2, '0')}</p>
        <p className={clicked ? 'active' : 'title'}>{title}</p>
        <button onClick={() => setClicked(!clicked)}>
          {clicked ? <FiChevronDown className='accordion__icon' /> : <FiChevronUp className='accordion__icon' />}
        </button>
      </div>
      {clicked && (
        <div className='accordion__content'>
          <p className='accordion__text'>{text}</p>
          <ul className='accordion__list'>
            {list.map((content, index) => {
              return <li key={index}>{content}</li>;
            })}
          </ul>
        </div>
      )}
    </figure>
  );
};

export default Accordion