import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../../services'
import { calcProgress, calcTimeProgress } from '../../utils/calcProgress'
import { TestingLayout } from '../layouts/PageLayout'
import { Stepper } from '../Stepper'


export const AnswerQuestions = ({onFinish, onLol}) => {
  const [question, setQuestion] = useState()
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(0)
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [timeProgress, setTimeProgress] = useState(100)
  const { testId } = useParams();

  // const onSubmit = (data) => {
  //   append(data)
  // }
  
    // useEffect(()=>{
    //   console.log(watch('inputName'))
    // },[control])
   
  

  useEffect(() => {
    const test = services.questions.fetchOne(testId)
    setProgress(calcProgress(step, test.questions.length))
    // setProgress((step+1) * (100/test.questions.length))
    setTimeLeft(test.time)
    setQuestion(test)
  }, [testId, step])


  useEffect(() => {
    let mounted = true

    setTimeout(() => {
      if(mounted){
        if(timeLeft) setTimeLeft(timeLeft-1)
        else console.log("DONE")
        setTimeProgress(calcTimeProgress(question.time, timeLeft-1))
        console.log(timeLeft)
      }
    }, 1000);

    return() => mounted = false
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft])

  // setInterval(() => {
  //   setTimeLeft(timeLeft - 1)
  //   console.log(timeLeft)
  // }, 1000);
  // useEffect(() => {
  //   console.log(question)
  // },[question])

  const handleAnswer = (answerIndex) => {
    console.log('answered')
    answers[step] = answerIndex
    setAnswers(answers)
    setProgress(calcProgress(step, question.questions.length))
    if (step >= question?.questions?.length - 1){
      return onFinish({id: question.id, answers: [...answers,]})
    }
    setStep(step + 1)
  }

  return (
    <TestingLayout title="Тестирование" progress={progress} timeProgress={timeProgress} >
      <Stepper value={step} customButtons>
        {
          question?.questions?.map((item, index) => {
            return(
              <div className='cards' key={index}>
                <input className="counter question" value={`Время - ${timeLeft} | Вопросы - ${index+1} / ${question.questions.length}`} disabled />
                <input type="button" className='question' placeholder="Вопрос" value={item.title} />
                <button name="answer" className="counter answer" onClick={() => handleAnswer(0)}>{item.question[0]}</button>
                <button name="answer" className="counter answer" onClick={() => handleAnswer(1)}>{item.question[1]}</button>
                <button name="answer" className="counter answer" onClick={() => handleAnswer(2)}>{item.question[2]}</button>
                <button name="answer" className="counter answer" onClick={() => handleAnswer(3)}>{item.question[3]}</button>
              </div>
            )
          })
        }
      </Stepper>
    </TestingLayout>

    // <div className="cards"></div>
    //   <input className="counter question" value={`${getQuestion.title}`} disabled />
    //   <input placeholder="Вопрос" {...register(`title`)} />
    //   <input placeholder="Ответ 1" {...register(`answer1`)} />
    //   <input placeholder="Ответ 2" {...register(`answer2`)} />
    //   <input placeholder="Ответ 3" {...register(`answer3`)} />
    //   <input placeholder="Ответ 4" {...register(`answer4`)} />
    //   <input placeholder="Правильный ответ *текст*" {...register(`answer`)} />
    //   <button onClick={handleSubmit(onSubmit)} className="steps">Добавить вопрос</button><hr />
    //   Созданные вопросы:
    //   <div className="scrollwrapper"><div className="scrollExistingQ"></div>
    //     {
    //       fields.map((field, index) => {
    //         return (
    //           <div key={index} id={index} className="existingQ horizontal">
    //             <div>
    //               <span className="existingQrow"><i className="fa fa-solid fa-question theme"></i> - {field.title}</span><br />
    //               <span className="existingQrow"><i className="fa fa-solid fa-comment-dots theme"></i> - {field.answer1} |  {field.answer2} |  {field.answer3} | {field.answer4}</span><br />
    //               <span className="existingQrow"><i className="fa fa-solid fa-square-check theme"></i> - {field.answer}</span>
    //             </div>
    //             <div>
    //               <span className="delete-card theme" onClick={() => remove(index)}><i className="fa fa-solid fa-trash"></i></span>
    //             </div>
    //           </div>
    //         )
    //       }).reverse()
    //     }
    //   </div>
    // </div>
    
  )
}