import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const LoginForm = ({ submitLogin }) => {
  const [newUsername, setUsername] = useState('')
  const [newPassword, setPassword] = useState('')

  const newLogin = (event) => {
    event.preventDefault()
    submitLogin({
      username: newUsername,
      password: newPassword,
    })
    setUsername('')
    setPassword('')
  }

  return (
    <Form onSubmit={newLogin} className="text-start">
      <Form.Group className="mb-3" controlId="username">
        <Form.Label className="fw-semibold">Username</Form.Label>
        <Form.Control
          type="text"
          value={newUsername}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="shadow-sm"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label className="fw-semibold">Password</Form.Label>
        <Form.Control
          type="password"
          value={newPassword}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="shadow-sm"
        />
      </Form.Group>

      <div className="d-grid">
        <Button variant="primary" size="lg" type="submit">
          Login
        </Button>
      </div>
    </Form>
  )
}

export default LoginForm
