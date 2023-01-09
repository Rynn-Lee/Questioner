export const UserInfo = ({currentTest}) => {

  return (
    <div className="cards">
      <input placeholder="Question" className="counter" name="Title" value={`Время на прохождение: ${currentTest.time} секунд`} disabled />
      <input placeholder="Question" className="counter" name="Title" value={`Автор теста: ${currentTest.author}`} disabled />
      <input placeholder="Question" className="counter" name="Title" value={`ID теста: ${currentTest.id}`} disabled />


      {/* <input placeholder="Name" className="inputField" autoComplete="off" {...register('name')} />
      <input placeholder="Group" className="inputField" autoComplete="off" {...register('group')} /> */}
    </div>
  )
}