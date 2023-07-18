import { useState } from 'react'
import Form from './Form'
import Item from './Item'
import Logo from './Logo'
import PackingList from './PackingList'

function App() {
  const [newItems, setNewItems] = useState([])

  function handleDeleteItem(id) {
    setNewItems((items) => items.filter((item) => item.id !== id))
  }

  const handleItems = function(items) {
    setNewItems((item) => [...item, items])
  }

  function handleCheck(id) {
    setNewItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handleClear() {
    const confirm = window.confirm('Are you sure you want to delete all items?')
    if (confirm) setNewItems([])
  }

  console.log(newItems)
  return (
    <>
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        newItems={newItems}
        handleCheck={handleCheck}
        handleDeleteItem={handleDeleteItem}
        handleClear={handleClear}
      />
      <Item newItems={newItems} />
    </>
  )
}

export default App
