const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        gap: '2.4rem',
      }}
    >
      <img
        style={{ width: '50px', height: '50px' }}
        src='./tv.png'
        alt='logo'
      />{' '}
      <span style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>Muvi</span>
    </div>
  )
}

export default Logo
