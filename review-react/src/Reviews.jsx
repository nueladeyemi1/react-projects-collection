import React, {useState} from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"; 


const Reviews = () => {

    const [people, setPeople] = useState(0);

    const { id, name, job, image, text } = reviews[people];

    const checkNumber = (number) => {
      if (number > reviews.length -1) {
        return 0
      }

      if (number < 0) {
        return reviews.length -1
      }

      return number;
    }

    const nextBtn = () => {
      setPeople((people)=> {
        let newPeople = people + 1;
        return checkNumber(newPeople);
      })
    };

    const prevBtn = () => {
      setPeople((people) => {
        let newPeople = people - 1;
        return checkNumber(newPeople);
      });
    };

    const randomNumber = () => {
      let random = Math.floor(Math.random() * reviews.length);
      if (random === people) {
        random = people + 1;
      }

      setPeople(checkNumber(random));
    }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevBtn}>
          <FaChevronLeft />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextBtn} />
        </button>
      </div>
      <button className="random-btn" onClick={randomNumber}>Surprise Me</button>
    </article>
  );
}

export default Reviews