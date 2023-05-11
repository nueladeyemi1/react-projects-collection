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
                  <div className='meal-type'>
                    {type.map((theType) => {
                      return <div className='meal-type-content'>{theType}</div>
                    })}
                  </div>
                  <div className='meal-title'>{name}</div>
                  <div className='meal-attributes'>
                    <div className='meal-attribute'>
                      <ion-icon
                        className='meal-icon hydrated'
                        name='flame-outline'
                      ></ion-icon>
                      {calory}
                    </div>
                    <div className='meal-attribute'>
                      <ion-icon
                        className='meal-icon hydrated'
                        name='restaurant-outline'
                      ></ion-icon>
                      {score}
                    </div>
                    <div className='meal-attribute'>
                      <ion-icon
                        className='meal-icon hydrated'
                        name='star-outline'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='ionicon s-ion-icon'
                          viewBox='0 0 512 512'
                        >
                          <title>Star</title>
                          <path
                            d='M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z'
                            stroke-linejoin='round'
                            class='ionicon-fill-none ionicon-stroke-width'
                          ></path>
                        </svg>
                      </ion-icon>
                      {rating}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className='meal-list'>
            {availMeal.map(({ id, title, lists }) => {
              return (
                <div key={id}>
                  <h3 className='heading-tertiary'>{title}</h3>
                  <ul className='lists'>
                    {lists.map((list) => {
                      return <li className='list'>{list}</li>
                    })}
                  </ul>
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
