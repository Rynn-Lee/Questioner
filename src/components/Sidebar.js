import {Link} from 'react-router-dom'


export const Sidebar = () => {

  return(
    <div className="sidebar">
      <div className="logo">_RL<i className="fa fa-solid fa-code theme"></i></div>
      <div className="buttons">
        <Link to="/" className="btn"><i className="fa fa-solid fa-clipboard-question"></i></Link>
        <Link to="/create" className="btn"><i className="fa fa-solid fa-plus"></i></Link>
        <Link to="/testhistory" className="btn"><i className="fa fa-solid fa-spell-check"></i></Link>
      </div>
      <Link to="/about" className="about"><i className="fa fa-solid fa-eject"></i></Link>
    </div>
  )
}