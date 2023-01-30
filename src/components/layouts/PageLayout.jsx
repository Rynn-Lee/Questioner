import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { services } from "../../services"
import {classNames} from "../../utils/classnames"

export const PageLayout = ({children, title, progress, showtests}) => {
  const isProgress = typeof progress !== 'undefined'
  const navigate = useNavigate()
  const search = useRef()

  const handleSearch = (e) => {
    e.preventDefault()
    const formResults = search.current
    const requestQuery = {
      search: formResults['searchField'].value,
    }
    if(requestQuery.search){
      const isTestExists = services.questions.fetchOne(requestQuery.search);
      if (isTestExists){
        navigate(`/testing/${isTestExists.id}`)
      }
      else{
        search.current['searchField'].value = ""
        search.current['searchField'].placeholder = "This test doesn't exist"
      }
    }
  }

  return (
    <div className="content-wrapper">

      {showtests && 
      <form className="searchBar" ref={search} onSubmit={handleSearch}>
        <input type="text" name={'searchField'} placeholder="Find test by id" autoComplete="off"/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      }

      <div className={classNames("page-title", isProgress && 'extended')}>
        {title}
        {isProgress && <div style={{ width: `${progress}%` }} className="progress-bar" />}
      </div>

      <div className="content">{children}</div>
    </div>
  )
  // progressBar.style.setProperty('--progress-bar', (step+1)*(100/children.length)+"%")
}
