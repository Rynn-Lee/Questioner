import { Link } from "react-router-dom"

const TestCards = (props) => {
  return(
    <div className="questions-card">
      <div className="truncate"><span className="theme"><i className="fa-regular fa-circle-question"></i> Test - {props.title}</span></div>
      {!props.mytest && <div><span className="theme"><i className="fa-solid fa-graduation-cap"></i> Student - </span> {props.user}</div>}
      {!props.mytest && <div><span className="theme"><i className="fa-solid fa-users-rectangle"></i> Group - </span> {props.group}</div>}
      <div><span className="theme"><i className="fa-solid fa-calendar-days"></i> Date - </span> {props.date}</div>
      <div><span className="theme"><i className="fa-solid fa-microscope"></i> Result - </span> {props.correct} out of {props.total} correct | Score: {props.grade}</div><hr />
      <div><span className="theme">Author: - </span> {props.author}</div>
      <div><span className="theme">Test ID -  <Link to={`/testing/${props.testid}`}>{props.testid}</Link></span></div>
      {props.mytest && <hr />}
      
      <div className="horizontal">
       {props.mytest && <span className="delete-card theme" onClick={() => props.deleteTest(props.id)}><i className="fa-solid fa-trash"></i></span>}
      </div>
    </div>
  )
}


/*
key={test.id}
correct={test.correct}
date={test.date}
grade={test.grade}
group={test.group}
id={test.id}
name={test.name}
title={test.group}
total={test.total}
*/
export default TestCards