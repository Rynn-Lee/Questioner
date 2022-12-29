import { useFormContext } from 'react-hook-form'

export const UserInfo = () => {
  const { register } = useFormContext()

  return (
    <div className="cards">
      <input placeholder="Question" className="counter" name="Title" value="Your info" disabled />
      <input placeholder="Name" className="inputField" autocomplete="off" {...register('name')} />
      <input placeholder="Group" className="inputField" autocomplete="off" {...register('group')} />
    </div>
  )
}