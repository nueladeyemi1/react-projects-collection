import { icons } from '../icons'

const Footer = () => {
  return (
    <div className='footer'>
      {icons.map((singleIcon) => {
        const { id, name, icon: Icon } = singleIcon
        return (
          <div
            // onMouseEnter={() => {
            //   console.log(id)
            //   setHover(true)
            // }}
            // onMouseLeave={() => setHover(false)}
            key={id}
            className='footer-icon'
          >
            <Icon className='icons' size={30} />
            <span className={`footer-icon-name`}>{name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Footer
