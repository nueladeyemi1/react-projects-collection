import { HiOutlineSearch } from 'react-icons/hi'
import './input.css'

const Input = () => {
  return (
    <form style={{ display: 'flex', alignItems: 'center' }}>
      <input className='nav__input' placeholder='What do you want to watch?' />{' '}
      <button style={{ background: 'none', border: 'none', color: '#ffffff' }}>
        <HiOutlineSearch
          style={{ position: 'static', marginLeft: '-2.5rem' }}
          size={16}
        />
      </button>
    </form>
  )
}

export default Input
