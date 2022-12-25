import {PageLayout} from '../components/layouts/PageLayout'
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form'
import { services } from '../services'
import { useNavigate } from 'react-router-dom';
import { Stepper } from '../components/Stepper';
import { UserInfo } from '../components/Testing/UserInfo';
import { AnswerQuestions } from '../components/Testing/AnswerQuestions';
import { FinishTest } from '../components/Testing/FinishTest';
import { calcProgress } from '../utils/calcProgress'


export const Testing = () => {
  const navigate = useNavigate()
  const methods = useForm()
  const { handleSubmit } = methods
  const [progress, setProgress] = useState(calcProgress(0, 3));
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])

  //! КОСТЫЛЬ !//
  const onSubmit = (newTest) => {
    let getQuestionAnswers = services.questions.fetchOne(answers.id)
    let grade = {correct: 0, total:0, grade: 0, title: ""}
    getQuestionAnswers.questions.map((question, index) => {
      if (question.answer-1 === answers.answers[index]){
        grade.correct += 1
      }
      grade.total += 1
      return true
    })
    grade.title = getQuestionAnswers.title
    grade.grade = Math.floor((grade.correct / grade.total)*100)
    Object.assign(newTest, grade)

    services.questions.addResult(JSON.stringify({...newTest, answers}))
    navigate('/testhistory')

  }
  //! КОСТЫЛЬ !//

  const handleStepChange = (newStep) => {
    setStep(newStep)
    setProgress(calcProgress(newStep, 3))
    console.log(step)
  }

  const onFinish = (result) => {
    console.log("Вызвано")
    console.log(result)
    setAnswers(result)
    setStep(step + 1)
    setProgress(calcProgress(step+1, 3))
  }

  return(
    <PageLayout title="Тестирование" progress={progress}>
      <div className="create-content">
      <FormProvider {...methods}>
        <div className="creation-card">
          <Stepper value={step} onStepChange={handleStepChange} customButtons={step === 1 || step === 2}>
            <UserInfo/>
            <AnswerQuestions onFinish={onFinish} />
            <FinishTest onSubmit={handleSubmit(onSubmit)}/>
          </Stepper>
        </div>
      </FormProvider>
      </div>
    </PageLayout>
  )
}