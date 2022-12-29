import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../services';
import {PageLayout} from '../components/layouts/PageLayout'
import {Link} from 'react-router-dom'

export const Stepper = ({children}) => {
  const [step, setStep] = useState(0)
  
  let progressBar = document.querySelector(':root')
  progressBar.style.setProperty('--progress-bar', (step+1)*(100/children.length)+"%")

  const handleNext = () => {
    if (step === children.length - 1) return
    setStep(step + 1)
    progressBar.style.setProperty('--progress-bar', (step+2)*(100/children.length)+"%")
  }
  const handleBack =() => {
    if (step === 0) return
    setStep(step - 1)
    progressBar.style.setProperty('--progress-bar', (step)*(100/children.length)+"%")
  }

  return (
    <div>
      <div className="horizontal2">
        {/* <span className="steps" onClick={handleBack}>Предыдущий шаг</span> */}
        <span className="steps" onClick={handleNext}>Далее</span>
      </div>
      {children[step]}
    </div>
  )
}



export const Quester = ({children, callfunc}) => {
  const [step, setStep] = useState(0)
  
  let progressBar = document.querySelector(':root')
  progressBar.style.setProperty('--progress-bar2', (step+1)*(100/children.length)+"%")

  const handleNext = () => {
    if (step === children.length - 1) return
    setStep(step + 1)
    progressBar.style.setProperty('--progress-bar2', (step+2)*(100/children.length)+"%")
  }

  return (
    <div >
      {children[step]}
      <div className="horizontal2">
        <span className="steps" onClick={handleNext}>Отправить ответ</span>
      </div>
    </div>
  )
}



export const Testing = ({handlenext}) => {
  const { testId } = useParams();
  const [test, setTest] = useState({title: "none"})
  const [student, setStudent] = useState({})
  const [answerState, setanswerState] = useState({
    questionId: 0,
    answer: 0,
  })

  useEffect(()=>{
    setTest(services.questions.fetchOne(testId)[0])
  }, [testId])
  
  useEffect(() => {
    console.log(student)
  }, [student])
  
  useEffect(() => {
    console.log(answerState)
  }, [answerState])


  const updateAnswerState = (field, state) => {
    setanswerState({...answerState, [field]: state})
  }
  return(
    <PageLayout title={`Тест: ${test.title}`} progress={100}>
      <div className="create-content">
        <div className="creation-card">
          <Stepper >
            <div className="cards">
              <input placeholder="Вопрос" className="counter" name="Title" value={`Your info. You can't get back here later`} disabled/>
              <input placeholder="ФИО" className="inputField" name="Name" onChange={(e) => setStudent({...student, name: e.target.value})} required/>
              <input placeholder="Группа" className="inputField" onChange={(e) => setStudent({...student, group: e.target.value, testName: test.title})} required/>
            </div>
            <Quester>
            {
              test.questions?.map((el, index) => {
                return(
                  <div className="cards" key={index} onFocus={()=>{updateAnswerState('questionId', index)}}>
                    <input placeholder="Question" className="counter" name="Title" value={`Answers on questions`} disabled/>
                    <div className='progress-bar-2'></div>
                    <input type="text" className="counter question" value={el.title} disabled/>
                    <input type="button" className="counter answer" value={el.answer1} onClick={(e)=>updateAnswerState('answer', e.target.value)}/>
                    <input type="button" className="counter answer" value={el.answer2} onClick={(e)=>updateAnswerState('answer', e.target.value)}/>
                    <input type="button" className="counter answer" value={el.answer3} onClick={(e)=>updateAnswerState('answer', e.target.value)}/>
                    <input type="button" className="counter answer" value={el.answer4} onClick={(e)=>updateAnswerState('answer', e.target.value)}/>
                  </div>
                )
              })
            }</Quester>
            <div className='cards'>
              <input placeholder="Вопрос" className="counter" name="Title" value={`Finish test?`} disabled/>
              <Link to="/"><button className="steps">Finish</button></Link>
            </div>
          </Stepper>
        </div>
      </div>
    </PageLayout>
  )
}