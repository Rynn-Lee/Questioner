import { Link } from "react-router-dom"

const QuestionCard = ({id, deleteTest, title, time, questions, date}) => {

  //! FIX THIS SHIT LATER !//
  //TODO Do not show the card if it has no questions inside
  if(questions.length === 0){
    return deleteTest(id)
  }
  //! FIX THIS SHIT LATER !//
  
  else{
    return(
      <div className="questions-card">
        <div className="truncate"><span className="theme"><i className="fa-solid fa-pen-to-square"></i> - {title}</span></div>
        <div><span className="theme"><i className="fa-regular fa-clock"></i> - </span> {time} секунд</div>
        <div><span className="theme"><i className="fa-regular fa-circle-question"></i> - </span> {questions.length}</div>
        <div><span className="theme"><i className="fa-solid fa-calendar-days"></i> - </span> {date}</div><hr />
        <div className="horizontal">
          <span className="delete-card theme" onClick={() => deleteTest(id)}><i className="fa-solid fa-trash"></i></span>
          <Link to={`/testing/${id}`} className="delete-card theme"><i className="fa-solid fa-graduation-cap"></i></Link>
        </div>
      </div>
    )
  }
}

export default QuestionCard