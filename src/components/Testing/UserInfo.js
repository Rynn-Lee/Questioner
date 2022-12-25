import { useFormContext } from 'react-hook-form'

export const UserInfo = () => {
  const { register } = useFormContext()

  return (
    <div className="cards">
      <input placeholder="Вопрос" className="counter" name="Title" value="Ваша информация" disabled />
      <input placeholder="Имя" className="inputField" {...register('name')} />
      <input placeholder="Группа" className="inputField" {...register('group')} />
    </div>
  )
}