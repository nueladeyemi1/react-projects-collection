const ButtonComing = ({ children, bgColor, color }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      className='coming__movie__btn'
    >
      {children}
    </button>
  )
}

export default ButtonComing
