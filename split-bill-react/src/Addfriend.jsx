import { useState } from 'react'
import Button from './Button'

const Addfriend = ({ onAddFriend }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !image) return

    const id = Date.now()

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }

    onAddFriend(newFriend)

    setName('')
    setImage('https://i.pravatar.cc/48')
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>👬 Friend name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
      />

      <label>📷 Image URLs</label>
      <input
        value={image}
        type='text'
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  )
}

export default Addfriend
