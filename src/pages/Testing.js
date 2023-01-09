import {PageLayout} from '../components/layouts/PageLayout'
import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form'
import { services } from '../services'
import { useNavigate, useParams } from 'react-router-dom';
import { Stepper } from '../components/Stepper';
import { UserInfo } from '../components/Testing/UserInfo';
import { AnswerQuestions } from '../components/Testing/AnswerQuestions';
import { FinishTest } from '../components/Testing/FinishTest';
import { calcProgress, calcTimeProgress } from '../utils/calcProgress'

const getResults = (test, answers, user) => {
  const total = test.questions.length
  const correct = test.questions.reduce((acc, question, index) => {
    if (question.answer - 1 === answers[index]) return acc + 1
    return acc
  }, 0)

  return {
    title: test.title,
    total,
    correct,
    grade: Math.floor((correct / total) * 100),
    ...user,
    author: test.author,
    testid: test.id,
  }
}
// https://youtu.be/novnyCaa7To

export const Testing = () => {
  const navigate = useNavigate()
  const methods = useForm()
  const { testId } = useParams();
  const { handleSubmit } = methods
  const [progress, setProgress] = useState(calcProgress(0, 3));
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [currentTest, setCurrentTest] = useState({})
  const [timeLeft, setTimeLeft] = useState(100)
  const [user, setUser] = useState({})
  const [timeProgressBar, setTimeProgressBar] = useState(100)
  
  useEffect(() => {
    const account = services.account.checkSession()
    if(!account) navigate("/login")
    else{
      setUser({user: account.login, group: account.group})
    }
  }, [navigate])


  const onSubmit = (data) => {
    console.log("OnSubmit called")
    const results = getResults(currentTest, answers, user)
    services.results.addResult({...data, ...results})
    navigate('/testhistory')
  }

  useEffect(()=>{
    const getTest = services.questions.fetchOne(testId)
    getTest ? setCurrentTest(getTest) : navigate('/error')
  }, [navigate, testId])

  useEffect(()=>{
    setTimeLeft(currentTest.time)
  },[currentTest])

  useEffect(()=>{
    let mounted = true
    if(mounted === true && timeProgressBar !== 0 && step === 1 && timeLeft !== -1){
      setTimeout(()=>{
        setTimeLeft(timeLeft - 1)
        setTimeProgressBar(calcTimeProgress(currentTest.time, timeLeft-1))
        // console.log(timeLeft)
      },1000)
    }
    return() => mounted = false
  },[currentTest.time, step, timeLeft, timeProgressBar])

  const handleStepChange = (newStep) => {
    setStep(newStep)
    setProgress(calcProgress(newStep, 3))
  }

  const onFinish = (userAnswers) => {
    setAnswers(userAnswers)
    setStep(step + 1)
    setProgress(calcProgress(step+1, 3))
  }

  return(
    <PageLayout title="Testing" progress={progress}>
      <div className="create-content">
      <FormProvider {...methods}>
        <div className="creation-card">
          <Stepper value={step} onStepChange={handleStepChange} customButtons={step === 1 || step === 2} timeProgressBar={timeProgressBar}>
            <UserInfo currentTest={currentTest}/>
            <AnswerQuestions onFinish={onFinish} currentTest={currentTest} onSubmit={handleSubmit(onSubmit)} timeLeftPass={currentTest.time}/>
            <FinishTest onSubmit={handleSubmit(onSubmit)} />
          </Stepper>
          {step === 1 && <div style={{ width: `${timeProgressBar}%` }} className="progress-bar-3" />}
          {step === 1 && <input type="button" className='counter question' placeholder="Question" value={`${timeLeft} second(s) left`} />}
        </div>
      </FormProvider>
      </div>
    </PageLayout>
  )
}