import { useContext } from 'react'
import { pageHandler } from '../App'

export const Sidebar = () => {
  const page = useContext(pageHandler)

  return(
    <div className="sidebar">
      <div className="logo">_RL<i className="fa fa-solid fa-code theme"></i></div>
      <div className="buttons">
        <span className="btn" onClick={() => page.setPage("Show")}><i className="fa fa-solid fa-clipboard-question"></i></span>
        <span className="btn" onClick={() => page.setPage("Create")}><i className="fa fa-solid fa-plus"></i></span>
        <span className="btn" onClick={() => page.setPage("Test")}><i className="fa fa-solid fa-spell-check"></i></span>
      </div>
      <div className="about" onClick={() => page.setPage("About")}>About</div>
    </div>
  )
}