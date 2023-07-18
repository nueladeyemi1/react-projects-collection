import { useState } from 'react'

const PackingList = ({
  newItems,
  handleDeleteItem,
  handleCheck,
  handleClear,
}) => {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems

  if (sortBy === 'input') sortedItems = newItems

  if (sortBy === 'description')
    sortedItems = newItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === 'packed')
    sortedItems = newItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((list) => (
          <li key={list.id}>
            <input
              type='checkbox'
              value={list.packed}
              onChange={() => handleCheck(list.id)}
            />

            <span style={list.packed ? { textDecoration: 'line-through' } : {}}>
              {list.quantity}
              {list.description}
            </span>
            <button onClick={() => handleDeleteItem(list.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className='action'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by the input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by the packed status</option>
        </select>
        <button onClick={handleClear}>clear list</button>
      </div>
    </div>
  )
}

export default PackingList
