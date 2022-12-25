import { useState, useEffect} from 'react'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'
import TestCards from '../components/TestCards'

export const TestHistory = () => {
  const [tests, setTests] = useState([])

  useEffect(() => {
    const Testings = services.questions.fetchTests()
    setTests(Testings)
  }, [])

  const deleteTest = (id) => {
    const filtered = services.questions.removeTest(id)
    setTests(filtered)
  }

  return(
    <PageLayout title={`История тестирований: ${tests.length}`}>
      {
        tests.map((test) => {
          return(
            <TestCards
              key={test.id}
              correct={test.correct}
              date={test.date}
              grade={test.grade}
              group={test.group}
              id={test.id}
              name={test.name}
              title={test.title}
              total={test.total}
              deleteTest = {deleteTest}
            />
          )
        }).reverse()
      }
    </PageLayout>
  )
}