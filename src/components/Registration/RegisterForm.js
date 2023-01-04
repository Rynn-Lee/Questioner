import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { services } from "../../services"

export const RegisterForm = () => {
  const loginForm = useRef()
  const navigate = useNavigate()

  const handleLoginForm = (e) => {
    e.preventDefault()
    const formResults = loginForm.current
    const requestQuery = {
      login: formResults['login'].value,
      password: formResults['password'].value,
      group: formResults['group'].value
    }
    const requestReturn = services.account.register(requestQuery)
    requestReturn === true ? navigate('/') : formResults['status'].value = requestReturn
  }


  return (
    <div className="login-form">
      <form ref={loginForm} onSubmit={handleLoginForm}>
        <label>Register form</label>
        <input className="counter answer" name={'status'} value="Fill the fields" disabled/>
        <input className="counter answer" autoComplete="off" name={'login'} placeholder="Login" required/>
        <input className="counter answer" autoComplete="off" name={'password'} placeholder="Password" required/>
        <input className="counter answer" autoComplete="off" name={'group'} placeholder="Group" required/>
        <button className="counter answer" type="submit">Register</button>
      </form>
    </div>
  )
}