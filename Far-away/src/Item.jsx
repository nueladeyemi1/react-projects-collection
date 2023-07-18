const Item = ({ newItems }) => {
  if (!newItems.length)
    return (
      <p className='stats'>
        <em>Start adding items to your packing list 🚀</em>
      </p>
    )

  const numItems = newItems.length
  const numPacked = newItems.filter((item) => item.packed).length
  const percent = Math.round((numPacked / numItems) * 100)
  return (
    <div>
      <footer className='stats'>
        <em>
          {percent === 100
            ? 'You got everything! Ready to go ✈'
            : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percent}%)`}
        </em>
      </footer>
    </div>
  )
}

export default Item
