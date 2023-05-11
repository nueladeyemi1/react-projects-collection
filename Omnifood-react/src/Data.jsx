import image1 from './img/app/app-screen-1.png'
import image2 from './img/app/app-screen-2.png'
import image3 from './img/app/app-screen-3.png'

import businessInsider from './img/logos/business-insider.png'
import forbes from './img/logos/forbes.png'
import techCrunch from './img/logos/techcrunch.png'
import newyorkTimes from './img/logos/the-new-york-times.png'
import usaToday from './img/logos/usa-today.png'

import meal1 from './img/meals/meal-1.jpg'
import meal2 from './img/meals/meal-2.jpg'

export const navbarData = [
  {
    id: 1,
    name: 'How it works',
  },
  {
    id: 2,
    name: 'Meals',
  },
  ,
  {
    id: 3,
    name: 'Testimonials',
  },
  {
    id: 4,
    name: 'Pricing',
  },
  {
    id: 1,
    name: 'Try for free',
  },
]

export const howItWorksData = [
  {
    id: 1,
    title: 'Tell us what you like (and what not)',
    content:
      'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
    image: image1,
  },
  {
    id: 2,
    title: 'Approve your weekly meal plan',
    content:
      'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
    image: image2,
  },
  {
    id: 3,
    title: 'Receive meals at convenient time',
    content:
      'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
    image: image3,
  },
]

export const featuresData = [
  { id: 1, image: businessInsider },
  { id: 2, image: forbes },
  { id: 3, image: techCrunch },
  { id: 4, image: newyorkTimes },
  { id: 5, image: usaToday },
]

export const mealData = [
  {
    id: 1,
    image: meal1,
    type: ['vegetarian'],
    name: 'Japanese Gyozas',
    calory: '650 calories',
    score: 'NutriScore ® 74',
    rating: '4.9 rating (537)',
  },
  {
    id: 2,
    image: meal2,
    type: ['vegan', 'paleo'],
    name: 'Avocado Salad',
    calory: '400 calories',
    score: 'NutriScore ® 92',
    rating: '4.8 rating (441)',
  },
]

export const availMeal = [
  {
    id: 1,
    title: 'Works with any diet',
    lists: [
      'Vegetarian',
      'Vegan',
      'Pescatarian',
      'Gluten-free',
      'Lactose-free',
      'Keto',
      'Paleo',
      'Low FODMAP',
      'Kid-friendly',
    ],
  },
]
