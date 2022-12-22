import { DBservice } from '../api/DataStorage'
import { useContext } from 'react'
import { pageHandler } from '../App'


const QuestionCard = (props) => {
  const page = useContext(pageHandler)

  const deletion = () => {
    DBservice.remove(props.id)
    page.setQuestionsList(DBservice.fetchAll())
  }

  return(
    <div className="questions-card">
      <div><span className="theme">Вопросник</span> - {props.title}</div>
      <div><span className="theme">Время на тест:</span> {props.time} секунд</div>
      <div><span className="theme">Вопросов:</span> {props.questions.length}</div>
      <div><span className="theme">Дата создания:</span> {props.date}</div><hr />
      <div onClick={() => deletion()}><span className="delete-card theme">Удалить</span></div>
    </div>
  )
}

export default QuestionCard