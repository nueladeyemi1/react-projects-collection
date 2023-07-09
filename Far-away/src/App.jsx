import { useState } from 'react'
import Form from './Form'
import Item from './Item'
import Logo from './Logo'
import PackingList from './PackingList'

function App() {
  const [newItems, setNewItems] = useState([])
  console.log(newItems)
  return (
    <>
      <Logo />
      <Form newItems={setNewItems} />
      <PackingList newItems={newItems} />
      <Item />
    </>
  )
}

export default App
