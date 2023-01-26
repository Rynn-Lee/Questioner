import { useCallback, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { services } from "../../services"
import md5 from 'md5-hash'

export const RegisterForm = () => {
  const loginForm = useRef()
  const navigate = useNavigate()

  const handleLoginForm = useCallback(async(e) => {
    e.preventDefault()
    const formResults = loginForm.current
    formResults['status'].value = "Loading..."
    formResults['button'].disabled = true

    const requestQuery = {
      login: formResults['login'].value,
      password: md5(formResults['password'].value),
      group: formResults['group'].value
    }

    const requestReturn = await services.account.register(requestQuery)
    requestReturn === true ? navigate('/') 
    : formResults['status'].value = requestReturn
      formResults['button'].disabled = false
  }, [navigate])


  return (
    <div className="login-form">
      <form ref={loginForm} onSubmit={handleLoginForm}>
        <label>Register form</label>
        <input className="counter answer" name={'status'} value="Fill the fields" disabled/>
        <input className="counter answer" autoComplete="off" name={'login'} placeholder="Login *" required/>
        <input className="counter answer" autoComplete="off" name={'password'} placeholder="Password *" required/>
        <input className="counter answer" autoComplete="off" name={'group'} placeholder="Group"/>
        <button className="counter answer" name={'button'} type="submit">Register</button>
      </form>
    </div>
  )
}