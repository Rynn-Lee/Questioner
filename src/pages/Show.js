import { useState, useEffect} from 'react'
import QuestionCard from '../components/QuestionCard'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'
import { Link, useNavigate } from 'react-router-dom'

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

  const shareTest = (id) => {
    navigator.clipboard.writeText(id);
    // alert("Copied the text: " + id);
  }

  return(
    <PageLayout title={`Tests Available: ${questions.length}`}>
      <div className='createTest'>
        <Link to="/create" className="btn"><i className="fa-solid fa-plus"></i> <span>Create New Test</span></Link>
      </div>
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
              shareTest={shareTest}
              open={question.open}
            />
          )
        }).reverse()
      }
    </PageLayout>
  )
}