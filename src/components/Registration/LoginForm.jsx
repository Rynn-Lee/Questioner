import { useCallback, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { services } from "../../services"
import md5 from 'md5-hash'

export const LoginForm = ({changeAction}) => {
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
        <div className="horizontal">
          <input className="counter actionfield top-field" name={'status'} value="Log in your existing account" disabled/>
        </div>
        <div className="horizontal">
          <input disabled value={"Login"} className="help-field"/>
          <input autoComplete="off" name={'login'} placeholder="---"/>
        </div>
        <div className="horizontal">
          <input disabled value={"Password"} className="help-field"/>
          <input type="password" autoComplete="off" name={'password'} placeholder="---"/>
        </div>
        <div className="horizontal3">
          <button className="actionfield" name={'button'} type="submit">Log in</button>
          <button className="additional-action" type="button" onClick={changeAction}>I don't have an account</button>
        </div>
      </form>
    </div>
  )
}