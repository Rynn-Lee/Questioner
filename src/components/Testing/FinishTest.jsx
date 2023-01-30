export const FinishTest = ({onSubmit}) => {
  return (
    <div className="cards">
      <input placeholder="Question" className="counter" name="Title" value={`Test is over!`} disabled />
      <button to="/testhistory" onClick={onSubmit} className="steps">Submit results</button>
    </div>
  )
}