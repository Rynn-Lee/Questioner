import { useState, useEffect, useCallback} from 'react'
import QuestionCard from '../components/QuestionCard'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'
import { Link, useNavigate } from 'react-router-dom'
import { LoadingScreen } from '../components/LoadingScreen'

export const Show = () => {
  const [questions, setQuestions] = useState([])
  const [loadingState, setLoadingState] = useState(0)
  const navigate = useNavigate()

  const fetchData = useCallback(async(account) => {
    setLoadingState(1)
    const results = await services.questions.fetchAll(account)
    setQuestions(results)
    setLoadingState(0)
  }, [])

  useEffect(() => {
    const account = services.account.checkSession()
    if(!account) navigate("/login")
    else{
      fetchData(account.login)
    }
  }, [fetchData, navigate])

  const deleteTest = useCallback(async (id, author) => {
    setLoadingState(1)
    setQuestions(await services.questions.remove(id, author))
    setLoadingState(0)
  }, [])

  const shareTest = (id) => {
    navigator.clipboard.writeText(id);
    // alert("Copied the text: " + id);
  }

  return(
    <>
    {loadingState ? <LoadingScreen/> : false}
    <PageLayout title={`Tests Available: ${questions.length}`} showtests>
      <div className='createTest'>
        <Link to="/create" className="btn"><i className="fa-solid fa-plus"></i> <span>Create New Test</span><div /></Link>
      </div>
      {
        questions.map((question) => {
          return(
            <QuestionCard
              key={question.id}
              id={question.testid}
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
    </PageLayout></>
  )
}