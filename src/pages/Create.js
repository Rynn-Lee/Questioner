import {PageLayout} from '../components/layouts/PageLayout'
import { useEffect, useState } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form'
import { services } from '../services'
import { useNavigate } from 'react-router-dom';
import { StartForm } from '../components/CreateQuestion/StartForm';
import { QuestionsForm } from '../components/CreateQuestion/QuestionForm';
import { SumbitForm } from '../components/CreateQuestion/SubmitForm';
import { Stepper } from '../components/Stepper';
import { calcProgress } from '../utils/calcProgress';


export const Create = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const account = services.account.checkSession()
    !account && navigate("/")
  }, [navigate])

  
  const methods = useForm()
  const values = useWatch({
    control: methods.control
  })
  const { handleSubmit } = methods
  
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(calcProgress(step, 3))

  const onSubmit = (newTest) => {
    services.questions.addTest(JSON.stringify(newTest))
    navigate('/')
  }
  
  const handleStepChange = (newStep) => {
    setStep(newStep)
    setProgress(calcProgress(newStep, 3))
  }

  const handleBack = () => {
    if (step <= 0) return
    handleStepChange(step - 1)
  }

  const firstStepFinished = values.title && values.time

  const handleNext = () => {
    if (step === 0) {
      if (!firstStepFinished) return
    }
    if (step >= 2) return
    handleStepChange(step + 1)
  }

  return (
    <PageLayout title="Test creating" progress={progress}>
      <div className="create-content">
      <FormProvider {...methods}>
        <div className="creation-card">
          <Stepper value={step}
            customButtons={
              <>
                <span className="steps" onClick={handleBack}>Previous step</span>
                <span className="steps" onClick={handleNext}>Next step</span>
              </>
            }
          >
            <StartForm />
            <QuestionsForm />
            <SumbitForm onSubmit={handleSubmit(onSubmit)} />
          </Stepper>
        </div>
      </FormProvider>
      </div>
    </PageLayout>
  )
}

