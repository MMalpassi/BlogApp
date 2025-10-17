import LoginForm from '../LoginForm/LoginForm'
import './LoginPage.css'
import AnimatedCounter from './AnimatedCounter'

const LoginPage = ({submitLogin}) => {

    return (
        <div>
            <h1> Quill </h1>
            <h3> Shares ideas with your friends </h3>
            <AnimatedCounter/>
            <LoginForm submitLogin={submitLogin}/>
        </div>
    )
}

export default LoginPage