export const SumbitForm = ({onSubmit}) => {
  return (
    <div className="cards">
      <input placeholder="Вопрос" className="counter" name="Title" value={`Уверены что хотите завершить создание теста?`} disabled />
      <button onClick={onSubmit} className="steps">Завершить создание теста</button>
    </div>
  )
}