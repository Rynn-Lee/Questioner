import { useState, useEffect, useCallback} from 'react'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'
import TestCards from '../components/TestCards'
import { useNavigate } from 'react-router-dom'
import { LoadingScreen } from '../components/LoadingScreen'

export const TestHistory = () => {
  const [myResults, setMyResults] = useState([])
  const [account, setAccount] = useState([])
  const [loadingState, setLoadingState] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const account = services.account.checkSession()
    if(!account) navigate("/login")
    else fetchData(account.login)
    setAccount(account)
  }, [])

  const fetchData = useCallback(async (account) => {
    setLoadingState(1)
    const data = await services.results.fetchResults(account)
    setLoadingState(0)
    setMyResults(data);
  }, [])

  const deleteResult = useCallback(async (id, account) => {
    setLoadingState(1)
    const filtered = await services.results.removeResult(id, account)
    setLoadingState(0)
    setMyResults(filtered)
  }, [])

  return(
    <>
    {loadingState ? <LoadingScreen/> : false}
    <PageLayout title={'My Testing History'}>
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
    </PageLayout></>
  )
}