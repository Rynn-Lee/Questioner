import { useState, useEffect, useCallback} from 'react'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'
import TestCards from '../components/TestCards'
import { useNavigate } from 'react-router-dom'
import { LoadingScreen } from '../components/LoadingScreen'

export const MyTestsHistory = () => {
  const [otherResults, setOtherResults] = useState([])
  const [loadingState, setLoadingState] = useState(0)
  const navigate = useNavigate()

  const fetchData = useCallback(async(login) => {
    setLoadingState(1)
    const otherTestings = await services.results.fetchOtherResults(login)
    setLoadingState(0)
    setOtherResults(otherTestings)
  }, [])

  useEffect(() => {
    const account = services.account.checkSession()
    if(!account) navigate("/login")
    else{
      fetchData(account.login)
    }
  }, [fetchData, navigate])


  return(
    <>
    {loadingState ? <LoadingScreen/> : false}
    <PageLayout title={'My tests finished by others'}>
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
    </PageLayout></>
  )
}