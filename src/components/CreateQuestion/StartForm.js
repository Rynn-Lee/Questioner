import { useFormContext } from 'react-hook-form'

export const StartForm = () => {
  const { register } = useFormContext()

  return (
    <div className="cards">
      <input placeholder="Question" className="counter" name="Title" value="Test configuration" disabled />
      <input placeholder="Title" className="inputField" autocomplete="off" {...register('title')} />
      <input placeholder="Time in seconds" type="number" autocomplete="off" className="inputField" pattern="[0-9]{5}" {...register('time')} />
    </div>
  )
}