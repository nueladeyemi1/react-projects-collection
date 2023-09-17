import { useState } from 'react'
import Button from '../../ui/Button'
import Form from '../../ui/Form'
import FormRowVertical from '../../ui/FormRowVertical'
import Input from '../../ui/Input'
import SpinnerMini from '../../ui/SpinnerMini'
import { useLogin } from './useLogin'

function LoginForm() {
  const [email, setEmail] = useState('nuel@example.com')
  const [password, setPassword] = useState('admin123')
  const { login, isLoading } = useLogin()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) return

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('')
          setPassword('')
        },
      }
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label='Email address' orientation='vertical'>
        <Input
          type='email'
          id='email'
          // This makes this form better for password managers
          autoComplete='username'
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label='Password' orientation='vertical'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical orientation='vertical'>
        <Button size='large' disabled={isLoading}>
          {!isLoading ? 'Login' : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  )
}

export default LoginForm
