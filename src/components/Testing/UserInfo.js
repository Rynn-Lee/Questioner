export const UserInfo = ({currentTest}) => {

  return (
    <div className="cards">
      <input placeholder="Question" className="counter" name="Title" value={`Время на прохождение: ${currentTest.time} секунд`} disabled />
      <input placeholder="Question" className="counter" name="Title" value={`Автор теста: ${currentTest.author}`} disabled />
      <input placeholder="Question" className="counter" name="Title" value={`ID теста: ${currentTest.testid}`} disabled />
    </div>
  )
}