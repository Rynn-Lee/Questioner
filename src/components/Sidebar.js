import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { services } from '../services'


export const Sidebar = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState({})

  useEffect(() => {
    const account = services.account.checkSession()
    !account ? navigate("/") : setAccount(account)
  }, [navigate])

  return(
    <div className="sidebar">
      <div className="logo">_RL<i className="fa fa-solid fa-code theme"></i></div>
      <div className="buttons">
        <Link to="/show" className="btn"><i className="fa fa-solid fa-clipboard-question"></i></Link>
        <Link to="/create" className="btn"><i className="fa fa-solid fa-plus"></i></Link>
        <Link to="/testhistory" className="btn"><i className="fa fa-solid fa-spell-check"></i></Link>
        <Link to="/" className="about"><i className="fa-solid fa-user"></i><br />{account.login}</Link>
      </div>
      <Link to="/about" className="about"><i className="fa fa-solid fa-eject"></i></Link>
    </div>
  )
}