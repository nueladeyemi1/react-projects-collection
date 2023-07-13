import Button from './Button'

const Profile = ({ name, image, balance }) => {
  return (
    <div className='profile--container'>
      <div className='profile-details'>
        <img src={image} alt={name} />
        <div className='profile-detail'>
          <h2>{name}</h2>
          {balance < 0 ? (
            <p>
              You owe {name}
              <span> {Math.abs(balance)}</span>
            </p>
          ) : balance > 1 ? (
            <p>Sarah owes you {balance}</p>
          ) : (
            <p>You and {name} are even</p>
          )}
        </div>
      </div>
      <Button>Select</Button>
    </div>
  )
}

export default Profile
