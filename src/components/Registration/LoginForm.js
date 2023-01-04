import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { services } from "../../services"

export const LoginForm = () => {
  const loginForm = useRef()
  const navigate = useNavigate()

  const handleLoginForm = (e) => {
    e.preventDefault()
    const formResults = loginForm.current
    const requestReturn = services.account.login(formResults['login'].value, formResults['password'].value)
    requestReturn === true ? navigate('/') : formResults['status'].value = requestReturn
  }


  return (
    <div className="login-form">
      <form ref={loginForm} onSubmit={handleLoginForm}>
        <label>Login form</label>
        <input className="counter answer" name={'status'} value="Type your login" disabled/>
        <input className="counter answer" autoComplete="off" name={'login'} placeholder="Login"/>
        <input className="counter answer" autoComplete="off" name={'password'} placeholder="Password"/>
        <button className="counter answer" type="submit">Log in</button>
      </form>
    </div>
  )
}