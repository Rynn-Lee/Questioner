import { useState, useEffect} from 'react'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'
import TestCards from '../components/TestCards'
import { useNavigate } from 'react-router-dom'

export const TestHistory = () => {
  const [myResults, setMyResults] = useState([])
  const [account, setAccount] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const account = services.account.checkSession()
    if(!account) navigate("/login")
    else{
      const Testings = services.results.fetchResults(account.login)
      setAccount(account)
      setMyResults(Testings)
    }
  }, [navigate])


  useEffect(() => {
    
  }, [])

  const deleteResult = (id) => {
    const filtered = services.results.removeResult(id, account.login)
    setMyResults(filtered)
  }

  return(
    <PageLayout title={`My Testing History`}>
      {
        myResults.map((test, index) => {
          return(
            <TestCards
              key={test.id}
              correct={test.correct}
              date={test.date}
              grade={test.grade}
              group={test.group}
              id={test.id}
              title={test.title}
              total={test.total}
              user={test.user}
              author={test.author}
              testid={test.testid}
              deleteTest = {deleteResult}
              mytest
            />
          )
        }).reverse()
      }
    </PageLayout>
  )
}