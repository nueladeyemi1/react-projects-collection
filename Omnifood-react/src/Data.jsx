import image1 from './img/app/app-screen-1.png'
import image2 from './img/app/app-screen-2.png'
import image3 from './img/app/app-screen-3.png'

import ben from './img/customers/ben.jpg'
import dave from './img/customers/dave.jpg'
import hannah from './img/customers/hannah.jpg'
import steve from './img/customers/steve.jpg'

import gallery1 from './img/gallery/gallery-1.jpg'
import gallery2 from './img/gallery/gallery-2.jpg'
import gallery3 from './img/gallery/gallery-3.jpg'
import gallery4 from './img/gallery/gallery-4.jpg'
import gallery5 from './img/gallery/gallery-5.jpg'
import gallery6 from './img/gallery/gallery-6.jpg'
import gallery7 from './img/gallery/gallery-7.jpg'
import gallery8 from './img/gallery/gallery-8.jpg'
import gallery9 from './img/gallery/gallery-9.jpg'
import gallery10 from './img/gallery/gallery-10.jpg'
import gallery11 from './img/gallery/gallery-11.jpg'
import gallery12 from './img/gallery/gallery-12.jpg'

import businessInsider from './img/logos/business-insider.png'
import forbes from './img/logos/forbes.png'
import techCrunch from './img/logos/techcrunch.png'
import newyorkTimes from './img/logos/the-new-york-times.png'
import usaToday from './img/logos/usa-today.png'

import meal1 from './img/meals/meal-1.jpg'
import meal2 from './img/meals/meal-2.jpg'

import {
  InfiniteOutline,
  NutritionOutline,
  LeafOutline,
  PauseOutline,
} from 'react-ionicons'

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
    id: 5,
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

export const testimonial = [
  {
    id: 1,
    image: dave,
    content:
      'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    name: '— Dave Bryson',
  },
  {
    id: 2,
    image: ben,
    content:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: '— Ben Hadley',
  },
  {
    id: 3,
    image: steve,
    content:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: '— Steve Miller',
  },
  {
    id: 4,
    image: hannah,
    content:
      'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
    name: '— Hannah Smith',
  },
]

export const imageGallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery11,
]

export const plansData = [
  {
    id: 1,
    planPackage: 'starter',
    price: 399,
    text: "per month, that's just $13 per meal!",
    planList: [
      '1 meal per day',
      'order from 11am to 9pm',
      'delivery is free',
      '',
    ],
    signUpPlan: 'Start eating well',
  },
  {
    id: 2,
    planPackage: 'complete',
    price: 649,
    text: "per month, that's just $11 per meal!",
    planList: [
      '2 meals per day',
      'order 24/7',
      'delivery is free',
      'get access to latest recipes',
    ],
    signUpPlan: 'Start eating well',
  },
]

export const featureData = [
  {
    id: 1,
    title: 'Never cook again!',
    icon: <InfiniteOutline color={'#00000'} height='25px' width='25px' />,
    content:
      'Our subscriptions cover 365 days per year, even including major holidays.',
  },
  {
    id: 2,
    title: 'Local and organic',
    icon: <NutritionOutline color={'#00000'} height='25px' width='25px' />,
    content:
      'Our cooks only use local, fresh, and organic products to prepare your meals.',
  },
  {
    id: 1,
    title: 'No waste',
    icon: <LeafOutline color={'#00000'} height='25px' width='25px' />,
    content:
      'All our partners only use reusable containers to package all your meals.',
  },
  {
    id: 1,
    title: 'Pause anytime',
    icon: <PauseOutline color={'#00000'} height='25px' width='25px' />,
    content:
      'Going on vacation? Just pause your subscription, and we refund unused days.',
  },
]

export const footLinkData = [
  {
    id: 1,
    heading: 'Account',
    links: ['Create account', 'Sign in', 'iOS app', 'Android app'],
  },
  {
    id: 2,
    heading: 'Company',
    links: ['About Omnifood', 'For Business', 'Cooking partners', 'Careers'],
  },
  {
    id: 3,
    heading: 'Resources',
    links: ['Recipes directory', 'Help center', 'Privacy & terms', ''],
  },
]
