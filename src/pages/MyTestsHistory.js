import { useState, useEffect} from 'react'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'
import TestCards from '../components/TestCards'
import { useNavigate } from 'react-router-dom'

export const MyTestsHistory = () => {
  const [otherResults, setOtherResults] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const account = services.account.checkSession()
    if(!account) navigate("/login")
    else{
      const otherTestings = services.results.fetchOtherResults(account.login)
      setOtherResults(otherTestings)
    }
  }, [navigate])


  useEffect(() => {
    
  }, [])

  return(
    <PageLayout title={`My tests finished by others`}>
      {
        otherResults.map((test, index) => {
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
            />
          )
        }).reverse()
      }
    </PageLayout>
  )
}