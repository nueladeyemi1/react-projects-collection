import React, {useState} from 'react'
import { data } from './data'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RxDot, RxDotFilled } from "react-icons/rx";


const Carousel = () => {
    const [count, setCount] = useState(0);
    const [fill, setFill] = useState(true)

      const forwardClick = function () {
        setCount(count + 1);
        setFill(false)

        if (count >= 3) {
          setCount(0);
        }
      };

    const backwardClick = function () {
        setCount(count - 1);
        setFill(false)

        if (count < 1) {
            setCount(3)
        }
        
    }

    const {text, author, role, img} = data[count];

  return (
    <>
      <article className="carousel__container">
        <img src={img} alt={author} />
        <div className="carousel__content">
          <blockquote className="carousel__text">"{text}"</blockquote>
          <p className="carousel__author">{author}</p>
          <p className="carousel__role">{role}</p>
        </div>
        <button className="btn btn__left">
          <FiChevronLeft onClick={() => backwardClick()} className="icons" />
        </button>
        <button className="btn btn__right">
          <FiChevronRight onClick={() => forwardClick()} className="icons" />
        </button>
      </article>
      <div className="dots">
        {data.map(({ id }) => {
          return (
            <p key={id} className="dot">
              {fill ? (
                <RxDotFilled className='dot__icon' onClick={() => setCount(id - 1)} />
              ) : (
                <RxDot className='dot__icon' onClick={() => setCount(id - 1)} />
              )}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Carousel


  