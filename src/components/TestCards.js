const TestCards = ({id, correct, date, grade, group, name, title, total, deleteTest}) => {
  return(
    <div className="questions-card">
      <div className="truncate"><span className="theme"><i className="fa-regular fa-circle-question"></i> - {title}</span></div>
      <div><span className="theme"><i className="fa-solid fa-graduation-cap"></i> - </span> {name}</div>
      <div><span className="theme"><i className="fa-solid fa-users-rectangle"></i> - </span> {group}</div>
      <div><span className="theme"><i className="fa-solid fa-calendar-days"></i> - </span> {date}</div><hr />
      <div><span className="theme"><i className="fa-solid fa-microscope"></i> - </span> {correct} из {total} правильно | {grade} баллов</div><hr />
      <div className="horizontal">
        <span className="delete-card theme" onClick={() => deleteTest(id)}><i className="fa-solid fa-trash"></i></span>
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