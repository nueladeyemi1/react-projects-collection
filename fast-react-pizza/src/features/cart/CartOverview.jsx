import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/helpers'
// import { getTotalCartPrice, getTotalCartQuantity } from '../user/userSlice'
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice'

function CartOverview() {
  const totlCartQuantity = useSelector(getTotalCartQuantity)
  const totlCartPrice = useSelector(getTotalCartPrice)

  if (!totlCartQuantity) return null

  return (
    <div className='flex items- justify-between text-sm md:text-base bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6'>
      <p className='text-stone-300 font-semibold space-x-4 sm:space-x-6'>
        <span>{totlCartQuantity} pizzas</span>
        <span>{formatCurrency(totlCartPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview
