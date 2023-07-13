import Profile from './Profile'
import './App.css'
import Bill from './Bill'
import React from 'react'
import Button from './Button'
import { useState } from 'react'
import Addfriend from './Addfriend'

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
]

function App() {
  const [showBill, setShowBill] = useState(false)
  const [handleAdd, setHandleAdd] = useState('')
  const [friends, setFriends] = useState(initialFriends)

  return (
    <div
      style={{
        display: 'flex',
        gap: '4rem',
      }}
    >
      <div>
        {initialFriends.map(({ id, name, image, balance }) => {
          return (
            <Profile key={id} name={name} image={image} balance={balance} />
          )
        })}
        <Addfriend
          friends={friends}
          setFriends={setFriends}
          handleAdd={handleAdd}
        />
        <Button>Add friend</Button>
      </div>
      <Bill />
    </div>
  )
}

export default App
