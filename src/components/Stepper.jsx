import { useEffect, useState } from "react"

export const Stepper = ({ children, onStepChange, value, customButtons, loadingState }) => {
  const isValue = typeof value !== 'undefined'
  const [step, setStep] = useState(isValue ? value : 0)
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
        {customButtons || loadingState ? customButtons : (
          <>
            <span className="steps" onClick={handleBack}>Previous step</span>
            <span className="steps" onClick={handleNext}>Next step</span>
          </>
        )}
      </div>
      {children?.[step]}
    </div>
  )
}