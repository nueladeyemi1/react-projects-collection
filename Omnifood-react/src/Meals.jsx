import React from 'react'
import { availMeal, mealData } from './Data'

const Meals = () => {
  return (
    <section>
      <div className='container'>
        <div className='container meal-card grid grid--3-cols grid--3-card'>
          {mealData.map(({ id, image, type, name, calory, score, rating }) => {
            return (
              <div className='card-box' key={id}>
                <img className='card--img' src={image} />
                <div className='card-content'>
                  <div>
                    {type.map((theType) => {
                      return <div>{theType}</div>
                    })}
                  </div>
                  <div>{name}</div>
                  <div>{calory}</div>
                  <div>{score}</div>
                  <div>{rating}</div>
                </div>
              </div>
            )
          })}
          <div className='meal-list'>
            {availMeal.map(({ id, title, lists }) => {
              return (
                <div key={id}>
                  <div>{title}</div>
                  {lists.map((list) => {
                    return <div>{list}</div>
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Meals
