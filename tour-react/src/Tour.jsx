import React, {useState} from "react";

export const Tour = ({id, image, info, price, name, removeTour}) => {
    const [showMore, setShowMore] = useState(false);


    return (
      <article className="single-tour"><img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                   {showMore ? info : `${info.substr(0, 200)}...`}
                   <button onClick={()=>{setShowMore(!showMore)}}>
                    {showMore ? 'showless' : 'Show More'}
                   </button>
                </p>
                <button className="delete-btn" onClick={()=>{removeTour(id)}}>Not Interested</button>
            </footer>
      </article>
    );
}