import { HiMenuAlt4 } from 'react-icons/hi'

const MiniMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.7rem',
      }}
    >
      <p style={{ fontSize: '1.8rem' }}>Sign in</p>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#BE123C',
          width: '3.6rem',
          height: '3.6rem',
          borderRadius: '50%',
          border: 'none',
        }}
      >
        <HiMenuAlt4 style={{ color: '#ffffff' }} size={20} />
      </button>
    </div>
  )
}

export default MiniMenu
