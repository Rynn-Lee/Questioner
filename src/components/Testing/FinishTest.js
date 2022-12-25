export const FinishTest = ({onSubmit}) => {
  return (
    <div className="cards">
      <input placeholder="Вопрос" className="counter" name="Title" value={`Тест завершен!`} disabled />
      {/* <Link to="/" className="steps">Завершить тест</Link> */}
      <button to="/testhistory" onClick={onSubmit} className="steps">Отправить результаты</button>
    </div>
  )
}