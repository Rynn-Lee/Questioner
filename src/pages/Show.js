import { useState, useEffect} from 'react'
import QuestionCard from '../components/QuestionCard'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'
import { useNavigate } from 'react-router-dom'

export const Show = () => {
  const [questions, setQuestions] = useState([])
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const account = services.account.checkSession()
    if(!account) navigate("/login")
    else{
      const newQuestions = services.questions.fetchAll(account.login)
      setQuestions(newQuestions)
      setUser(account.login)
    }
  }, [navigate])

  const deleteTest = (id) => {
    const filtered = services.questions.remove(id, user)
    setQuestions(filtered)
  }

  return(
    <PageLayout title={`Tests Available: ${questions.length}`}>
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
              author={question.author}
              deleteTest={deleteTest}
            />
          )
        }).reverse()
      }
    </PageLayout>
  )
}