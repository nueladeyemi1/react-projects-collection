import './App.css'

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='button'>
      <h4>{children}</h4>
    </button>
  )
}

export default Button
