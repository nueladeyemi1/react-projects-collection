import Button from './Button'

const Bill = () => {
  return (
    <div className='bill-container'>
      <h1>Split A bill with anthony</h1>
      <div className='bill-form'>
        <span>💰 Bill value</span> <input type='number' />
      </div>
      <div className='bill-form'>
        <span>🚶‍♂️ Bill value</span> <input type='number' />
      </div>
      <div className='bill-form'>
        <span>👫 Bill value</span> <input type='number' />
      </div>
      <div className='bill-form'>
        <span>🤑 Bill value</span>
        <select>
          <option>You</option>
        </select>
      </div>

      <Button>Split bill</Button>
    </div>
  )
}

export default Bill
