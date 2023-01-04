import { useFormContext } from 'react-hook-form'

export const UserInfo = () => {
  const { register } = useFormContext()

  return (
    <div className="cards">
      <input placeholder="Question" className="counter" name="Title" value="Your info" disabled />
      <input placeholder="Name" className="inputField" autoComplete="off" {...register('name')} />
      <input placeholder="Group" className="inputField" autoComplete="off" {...register('group')} />
    </div>
  )
}