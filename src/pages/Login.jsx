import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PageLayout } from "../components/layouts/PageLayout"
import { LoginForm } from "../components/Registration/LoginForm"
import { RegisterForm } from "../components/Registration/RegisterForm"
import { services } from "../services"

export const Login = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState({})
  const [action, setAction] = useState(true)

  useEffect(()=> {
    setAccount(services.account.checkSession())
  }, [])

  const logout = () => {
    services.account.logout()
    navigate('/')
  }

  const changeAction = () => setAction(!action)

  if(!account){
    return (
    <div className="login-div">
      {action ?
        <LoginForm changeAction={changeAction} /> :
        <RegisterForm changeAction={changeAction}/>
      }
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