import { useEffect, useState } from "react"

export const Stepper = ({ children, onStepChange, isOnTest, value, customButtons, timeProgress }) => {
  const isValue = typeof value !== 'undefined'
  const [step, setStep] = useState(isValue ? value : 0)
  const isTimeProgress = typeof timeProgress !== 'undefined'

  useEffect(() => {
    if (isValue) setStep(value)
  }, [value, isValue])

  const handleNext = () => {
    if (step === children.length - 1) return
    const newStep = step + 1 
    setStep(newStep)
    onStepChange(newStep)
  }

  const handleBack = () => {
    if (step === 0) return
    const newStep = step - 1
    setStep(newStep)
    onStepChange(newStep)
  }
  
  return (
    <div>
      <div className="horizontal2">
        {customButtons ? customButtons : (
          <>
            <span className="steps" onClick={handleBack}>Вернуться назад</span>
            <span className="steps" onClick={handleNext}>Следующий шаг</span>
          </>
        )}
      </div>
      {children?.[step]}
      {isTimeProgress && <div style={{ width: `${timeProgress}%` }} className="progress-bar-3" />}
    </div>
  )
}