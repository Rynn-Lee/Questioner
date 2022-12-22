import { useContext, useEffect } from 'react'
import { pageHandler } from '../../App'
import { DBservice } from '../../api/DataStorage'

export const StepOne = () => {
  const quest = useContext(pageHandler)
  return(
    <div className="creation-card"><span className="Back">Назад</span>  Назовите ваш тест
      <input placeholder="Название теста"/>
      <input placeholder="Время на сдачу в секундах"/>
      <button onClick={() => quest.setStep(2)}>Следующий шаг</button>
    </div>
  )
}

export const StepTwo = () =>{
  // const quest = useContext(pageHandler)
  // return(
  //   <div className="creation-card"><span className=" theme Back" onClick={() => quest.setStep(quest.step -= 1)}>Назад</span> Вопрос №1
  //     <input placeholder="Название вопроса" onChange={(e) => quest.setNewQuestion({...quest.newQuestion, questions: {title: e.target.value}})}/>
  //     <input placeholder="Ответ №1" onChange={(e) => quest.setNewQuestion({...quest.newQuestion, questions: { question: [0] = e.target.value}})}/>
  //     <button onClick={() => quest.setStep(2)}>Следующий шаг</button>
  //     <button>Завершить</button>
  //   </div>
  // )
}