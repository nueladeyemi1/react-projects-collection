import { useState } from 'react'

const Form = ({ handleItems, check }) => {
  //   const [data, setData] = useState({
  //     quantity: 1,
  //     description: '',
  //   })

  const [quantity, setQuantity] = useState(1)
  const [description, setDescription] = useState('')

  const handleSubmit = function(e) {
    e.preventDefault()
    if (!description) return

    const theItems = {
      id: Date.now(),
      quantity: quantity,
      description: description,
      packed: false,
    }

    handleItems(theItems)

    setQuantity('')
    setDescription('')
    // console.log(newItems)
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return <option key={num}>{num}</option>
        })}
      </select>
      <input
        type='text'
        value={description}
        placeholder='item...'
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  )
}

export default Form
