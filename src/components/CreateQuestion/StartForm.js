import { useFormContext } from 'react-hook-form'

export const StartForm = () => {
  const { register } = useFormContext()

  return (
    <div className="cards">
      <input placeholder="Question" className="counter" name="Title" value="Test configuration" disabled />
      <input placeholder="Title" className="inputField" autoComplete="off" {...register('title')} />
      <input placeholder="Time in seconds" type="number" autoComplete="off" className="inputField" pattern="[0-9]{5}" {...register('time')} />
      <div className='checkbox'><input type="checkbox" className="inputField" autoComplete="off" {...register('open')} /><label>It this test open? Anyone will be able to see this test if checked!</label></div>
    </div>
  )
}