import LoginForm from '../LoginForm/LoginForm'
import './LoginPage.css'
import AnimatedCounter from './AnimatedCounter'
import { Card, Container } from 'react-bootstrap'

const LoginPage = ({submitLogin}) => {

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Container className="d-flex justify-content-center ">
        <Card className="shadow-lg border-0 w-50">
          <Card.Body className="p-1 text-center">
            <h1 className="fw-bold text-primary mb-2">Reblogger</h1>
            <h5 className="text-muted mb-4">All your blogs, in one place.</h5>

            <AnimatedCounter />

            <LoginForm submitLogin={submitLogin} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default LoginPage