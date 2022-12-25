import { useState, useEffect} from 'react'
import QuestionCard from '../components/QuestionCard'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'

export const Show = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const newQuestions = services.questions.fetchAll()
    setQuestions(newQuestions)
  }, [])

  const deleteTest = (id) => {
    const filtered = services.questions.remove(id)
    setQuestions(filtered)
  }

  return(
    <PageLayout title={`Ваши тесты: ${questions.length}`}>
      {
        questions.map((question) => {
          return(
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              time={question.time}
              date={question.date}
              questions={question.questions}
              deleteTest={deleteTest}
            />
          )
        }).reverse()
      }
    </PageLayout>
  )
}