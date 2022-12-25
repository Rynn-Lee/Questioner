import { useFormContext } from 'react-hook-form'

export const StartForm = () => {
  const { register } = useFormContext()

  return (
    <div className="cards">
      <input placeholder="Вопрос" className="counter" name="Title" value="Название вопросника" disabled />
      <input placeholder="Название" className="inputField" {...register('title')} />
      <input placeholder="Время" className="inputField" {...register('time')} />
    </div>
  )
}