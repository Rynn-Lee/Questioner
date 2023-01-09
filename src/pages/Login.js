import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PageLayout } from "../components/layouts/PageLayout"
import { LoginForm } from "../components/Registration/LoginForm"
import { RegisterForm } from "../components/Registration/RegisterForm"
import { services } from "../services"

export const Login = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState({})

  useEffect(()=> {
    setAccount(services.account.checkSession())
  }, [])

  const logout = () => {
    services.account.logout()
    navigate('/')
  }

  if(!account){
    return (
    <div className="login-div">
      <LoginForm />
      <RegisterForm />
    </div>
    )
  }

  else{
    return(
      <PageLayout title={`Welcome! ${account.login}`}>
        <div className="create-content">
          <div className="creation-card">
            Login: <span className="theme">{account.login}</span> <br />
            Group: <span className="theme">{account.group}</span> <br />
            <button onClick={()=>logout()} className="btn">Log out</button>
          </div>
      </div>
      </PageLayout>
    )
  }
}