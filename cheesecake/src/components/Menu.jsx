import { TiStarFullOutline } from 'react-icons/ti'

const items = [
  {
    id: 1,
    image: 'blueberry.png',
    name: 'Blueberry Cheesecake',
    desc: 'Blueberry love, cheesecake delight!',
    price: '9.00',
  },
  {
    id: 2,
    image: 'biscoff.png',
    name: 'Biscoff Cheesecake',
    desc: 'Biscoff adores cheesecake magic',
    price: '11.00',
  },
  {
    id: 1,
    image: 'chocolate.png',
    name: 'Chocolate Cheesecake',
    desc: 'Cherish Chocolate, relish cheesecake magic!',
    price: '10.00',
  },
]

const Menu = () => {
  return (
    <section className='menu'>
      <h1 className='menu-title'>Our Menu </h1>
      <div className='menu-card-container'>
        {items.map((item) => {
          const { id, image, name, desc, price } = item

          return (
            <div key={id} className='menu-card'>
              <div className='menu-card-icon'>
                <img src={image} alt={name} />
              </div>
              <p className='menu-card-title'>{name}</p>
              <p className='menu-card-desc'>{desc}</p>
              <div className='menu-card-details'>
                <p>
                  <span>$</span> {price}
                </p>
                <p>
                  {Array.from({ length: 5 }, () => {
                    return <TiStarFullOutline color='#6A4028' />
                  })}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Menu
