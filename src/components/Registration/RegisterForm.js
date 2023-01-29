import { useCallback, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { services } from "../../services"
import md5 from 'md5-hash'

export const RegisterForm = ({changeAction}) => {
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
      email: formResults['email'].value
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
        <div className="horizontal">
          <input className="counter actionfield top-field" name={'status'} value="Register a new account" disabled/>
        </div>
        <div className="horizontal">
          <input disabled value={"Login"} className="help-field"/>
          <input autoComplete="off" name={'login'} placeholder="---"/>
        </div>
        <div className="horizontal">
          <input disabled value={"Password"} className="help-field"/>
          <input type="password" autoComplete="off" name={'password'} placeholder="---"/>
        </div>
        <div className="horizontal">
          <input disabled value={"Email"} className="help-field"/>
          <input autoComplete="off" name={'email'} placeholder="---"/>
        </div>
        <div className="horizontal3">
          <button className="actionfield" name={'button'} type="submit">Register</button>
          <button className="additional-action" type="button" onClick={changeAction}>I have an account</button>
        </div>
      </form>
    </div>
  )
}