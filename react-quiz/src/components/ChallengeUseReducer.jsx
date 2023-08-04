import { useReducer } from 'react'
// import './styles.css'

const initialState = {
  balance: 0,
  loan: 0,
  status: 'noAcc',
}
function reducer(state, action) {
  switch (action.type) {
    case 'open':
      return { ...state, status: 'openAcc', balance: state.balance + 500 }
    case 'deposit':
      return { ...state, balance: state.balance + 150 }
    case 'withdraw':
      return { ...state, balance: state.balance - 50 }
    case 'loan':
      return {
        ...state,
        status: 'loan',
        balance: state.status === 'loan' ? state.balance : state.balance + 5000,
        loan: 5000,
      }
    case 'payLoan':
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        status: 'paid',
      }
    case 'closeAcc':
      const balanceChecker = state?.balance !== 0
      const loanChecker = state?.loan > 0
      if (balanceChecker || loanChecker) return state
      return initialState

    default:
      throw new Error('Unknown Type')
  }
}

const ChallengeUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { balance, loan, status } = state
  const disableBtn = status === 'noAcc' ? false : true
  console.log(balance)
  return (
    <div className='App'>
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
      <div>
        <button
          disabled={disableBtn}
          onClick={() => dispatch({ type: 'open' })}
        >
          Open account
        </button>
      </div>
      <br />
      <div>
        <button
          disabled={!disableBtn}
          onClick={() => dispatch({ type: 'deposit' })}
        >
          Deposit 150
        </button>
      </div>
      <br />
      <div>
        <button
          disabled={!disableBtn}
          onClick={() => dispatch({ type: 'withdraw' })}
        >
          Withdraw 50
        </button>
      </div>
      <br />
      <div>
        <button
          disabled={!disableBtn}
          onClick={() => dispatch({ type: 'loan' })}
        >
          Request a loan of 5000
        </button>
      </div>
      <br />
      <div>
        <button
          disabled={!disableBtn}
          onClick={() => dispatch({ type: 'payLoan' })}
        >
          Pay loan
        </button>
      </div>
      <br />
      <div>
        <button
          disabled={!disableBtn}
          onClick={() => dispatch({ type: 'closeAcc' })}
        >
          Close account
        </button>
      </div>
    </div>
  )
}

export default ChallengeUseReducer
