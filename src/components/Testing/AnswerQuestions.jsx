import { useEffect, useState } from 'react'
import { calcProgress } from '../../utils/calcProgress'
import { TestingLayout } from '../layouts/TestingLayout'
import { Stepper } from '../Stepper'


export const AnswerQuestions = ({onFinish, currentTest, timeLeftPass}) => {
  const [answers, setAnswers] = useState([])
  const [step, setStep] = useState(0)
  const [timeLeft, setTimeLeft] = useState(timeLeftPass)
  const [progress, setProgress] = useState(calcProgress(step, currentTest.questions.length))

  const handleAnswer = (answerIndex) => {
    answers[step] = answerIndex
    setAnswers(answers)
    setProgress(calcProgress(step+1, currentTest.questions.length))
    if (step >= currentTest?.questions?.length - 1){
      return onFinish(answers)
    }
    setStep(step + 1)
  }

  //TODO Check if i can remove code duplicate from "Testing", it has the same timer for the same purpose
  useEffect(()=>{
    let mounted = true
    if(mounted === true && timeLeft !== -1){
      setTimeout(()=>{
        setTimeLeft(timeLeft - 1)
      },1000)
    }
    return() => mounted = false
  },[currentTest.time, step, timeLeft])

  useEffect(()=>{
    if(timeLeft === -1){
      return onFinish(answers)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft])
  //TODO Check if i can remove code duplicate from "Testing", it has the same timer for the same purpose

  return (
    <TestingLayout title="Testing" progress={progress}>
      <Stepper value={step} customButtons>
        {
          currentTest.questions?.map((question, index) => {
            return(
              <div className='cards' key={index}>
                <input type="button" className='question' placeholder="Question" value={`${index+1} / ${currentTest.questions.length} - ${question.title}`} />
                <button name="answer" className="counter answer" onClick={() => handleAnswer(0)}>{question.question[0]}</button>
                <button name="answer" className="counter answer" onClick={() => handleAnswer(1)}>{question.question[1]}</button>
                <button name="answer" className="counter answer" onClick={() => handleAnswer(2)}>{question.question[2]}</button>
                <button name="answer" className="counter answer" onClick={() => handleAnswer(3)}>{question.question[3]}</button>
              </div>
            )
          })
        }
      </Stepper>
    </TestingLayout>
  )
}