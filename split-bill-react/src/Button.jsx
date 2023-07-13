import './App.css'

const Button = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} className='btn'>
      <h4>{children}</h4>
    </button>
  )
}

export default Button
