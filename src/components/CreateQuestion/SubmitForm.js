export const SumbitForm = ({onSubmit}) => {
  return (
    <div className="cards">
      <input placeholder="Question" className="counter" name="Title" value={`Are you sure you want to complete?`} disabled />
      <button onClick={onSubmit} className="steps">Complete test creating</button>
    </div>
  )
}