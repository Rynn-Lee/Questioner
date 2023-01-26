import { useCallback, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { services } from "../../services"
import md5 from 'md5-hash'

export const LoginForm = () => {
  const loginForm = useRef()
  const navigate = useNavigate()

  const handleLoginForm = useCallback(async(e) => {
    e.preventDefault()
    const formResults = loginForm.current
    formResults['status'].value = "Loading..."
    formResults['button'].disabled = true
    
    const requestReturn = await services.account.login(
      formResults['login'].value,
      md5(formResults['password'].value)
    )

    requestReturn === true ? navigate('/')
      : formResults['status'].value = requestReturn;
        formResults['button'].disabled = false
  },[navigate])


  return (
    <div className="login-form">
      <form ref={loginForm} onSubmit={handleLoginForm}>
        <label>Login form</label>
        <input className="counter answer" name={'status'} value="Type your login" disabled/>
        <input className="counter answer" autoComplete="off" name={'login'} placeholder="Login"/>
        <input className="counter answer" type="password" autoComplete="off" name={'password'} placeholder="Password"/>
        <button className="counter answer" name={'button'} type="submit">Log in</button>
      </form>
    </div>
  )
}