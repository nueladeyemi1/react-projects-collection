import { useState } from 'react'
import Button from './Button'

const Addfriend = ({ friends, setFriends, handleAdd }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  handleAdd = function(e) {
    e.preventDefault()
    const newFriend = {
      id: Date.now(),
      name: name,
      image: image,
    }

    setFriends((friends) => [...friends, newFriend])
    console.log(friends)
  }
  return (
    <form className='addfriend--container' onSubmit={handleAdd}>
      <div className='add-friend'>
        <span>👬 Friend name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
        />
      </div>
      <div className='add-friend'>
        <span>📷 Image URLs</span>
        <input value={image} type='text' />
      </div>
      <Button>Add</Button>
    </form>
  )
}

export default Addfriend
