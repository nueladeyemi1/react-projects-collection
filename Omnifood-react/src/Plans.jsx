import React from 'react'
import { featureData, plansData } from './Data'

const Plans = () => {
  return (
    <section className='section-pricing'>
      <div className='container'>
        <span className='subheading'>pricing</span>
        <h2 className='heading-secondary'>Eating without breaking the bank</h2>
      </div>
      <div className='container grid grid--2-cols margin-bottom-md'>
        {plansData.map(
          ({ id, planPackage, price, text, planList, signUpPlan }) => {
            return (
              <div className='pricing-plan' key={id}>
                <header className='plan-header'>
                  <p className='plan-name'>{planPackage}</p>
                  <p className='plan-price'>
                    <span>$</span>
                    {price}
                  </p>
                  <p className='plan-text'>{text}</p>
                </header>
                <ul className='plan-lists'>
                  {planList.map((list) => {
                    return (
                      <li className='list'>
                        <ion-icon name='checkmark-outline'></ion-icon>
                        {list}
                      </li>
                    )
                  })}
                </ul>
                <div className='sign-up-plan'>
                  <a className='btn btn-start' href=''>
                    {signUpPlan}
                  </a>
                </div>
              </div>
            )
          }
        )}
      </div>
      <div className='container grid'>
        <aside className='plan-details'>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
      <div className='container grid grid--4-cols'>
        {featureData.map(({ id, title, icon, content }) => {
          return (
            <div key={id} className='feature'>
              <div className='feature-icon'>{icon}</div>
              <div className='feature-title'>{title}</div>
              <div className='feature-text'>{content}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Plans
