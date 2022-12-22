import { StepOne, StepTwo } from "./Pages/Steps"
import { useState, useContext } from 'react'
import { pageHandler } from '../App'

function QuestionConstructor(props){
  switch(props.page){
    case 1: return <StepOne />
    case 2: return <StepTwo />
  }
}

export const Create = () => {
  const page = useContext(pageHandler)
  return(
  <div className="content-wrapper">
    <div className="page-title">Создание теста - Шаг: {page.step}</div>
      <div className="content create-content">
        <QuestionConstructor page={page.step} />
    </div>
  </div>
  )
}

