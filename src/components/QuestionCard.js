import { Link } from "react-router-dom"

const QuestionCard = ({id, deleteTest, title, time, questions, date, author, shareTest, open}) => {

  //! FIX THIS SHIT LATER !//
  //TODO Do not show the card if it has no questions inside
  // if(questions.length === 0){
  //   return deleteTest(id)
  // }
  //! FIX THIS SHIT LATER !//
  
  // else{
    return(
      <div className="questions-card">
        <Link to={`/testing/${id}`}>
          <div className="truncate"><span className="theme"><i className="fa-solid fa-pen-to-square"></i> Title - {title}</span> {open === true ? <i className="fa-solid fa-unlock green"></i> : <i className="fa-solid fa-lock red"></i>}</div>
          <div><span className="theme"><i className="fa-regular fa-clock"></i> Time - </span> {time} seconds</div>
          <div><span className="theme"><i className="fa-regular fa-circle-question"></i> Questions - </span> {questions.length}</div>
          <div><span className="theme"><i className="fa-solid fa-calendar-days"></i> Created - </span> {date}</div><hr />
          <div><span className="theme"><i className="fa-solid fa-user"></i> Author - </span> {author}</div>
          <div><span className="theme"><i className="fa-solid fa-user"></i> Test ID - </span> {id}</div><hr />
        </Link>
        <div className="horizontal">
          {deleteTest && <span className="delete-card theme" onClick={() => deleteTest(id)}><i className="fa-solid fa-trash"></i></span>}
          <span className="delete-card share-card theme" onClick={() => shareTest(id)}><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
        </div>
      </div>
    )
  // }
}

export default QuestionCard