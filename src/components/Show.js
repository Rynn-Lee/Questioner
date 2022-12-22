import { DBservice } from '../api/DataStorage'
import { useContext } from 'react'
import { pageHandler } from '../App'
import QuestionCard from './QuestionCard'

export const Show = () => {
  const page = useContext(pageHandler)

  return(
    <div className="content-wrapper">
      <div className="page-title">Ваши тесты</div>
      <div className="content">
        {
          page.questionsList.map((question, index) => {
            return(
              <QuestionCard
                key={question.id}
                id={question.id}
                title={question.title}
                time={question.time}
                date={question.date}
                questions={question.questions}
              />
            )
          })
        }
      </div>
    </div>
  )
}