import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { services } from '../services'


export const Sidebar = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState({})

  useEffect(() => {
    const account = services.account.checkSession()
    !account ? navigate("/login") : setAccount(account)
  }, [navigate])

  return(
    <div className="sidebar">
      <div className="logo">_RL<i className="fa fa-solid fa-code theme"></i></div>
      <div className="buttons">
        <Link to="/" className="btn"><i className="fa fa-solid fa-clipboard-question"></i><br/><span>My Tests</span></Link>
        <Link to="/opentests" className="btn"><i className="fa fa-brands fa-wpexplorer"></i><br/><span>Open Tests</span></Link>
        <Link to="/testhistory" className="btn"><i className="fa fa-solid fa-clock-rotate-left"></i><br/><span>My Results</span></Link>
        <Link to="/mytest" className="btn"><i className="fa fa-solid fa-spell-check"></i><br/><span>Other results</span></Link>
        <Link to="/login" className="btn"><i className="fa fa-solid fa-user"></i><br /><span>{account.login}</span></Link>
      </div>
      <Link to="/about" className="about btn"><i className="fa fa fa-solid fa-eject"></i><br/><span>About</span></Link>
    </div>
  )
}