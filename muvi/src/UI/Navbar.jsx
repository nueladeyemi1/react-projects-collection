import Input from '../Components/Input'
import Logo from '../Components/Logo'
import MiniMenu from '../Components/MiniMenu'

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '8rem',
      }}
    >
      <Logo />
      <Input />
      <MiniMenu />
    </div>
  )
}

export default Navbar
