import React from 'react'

const PackingList = ({ newItems }) => {
  return (
    <div className='list'>
      <ul>
        {newItems.map((list) => (
          <li>
            <div>{list.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PackingList
