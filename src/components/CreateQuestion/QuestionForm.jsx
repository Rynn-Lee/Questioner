import { useForm, useFormContext, useFieldArray } from 'react-hook-form'


export const QuestionsForm = () => {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions"
  })
  const { register, handleSubmit, resetField } = useForm()
  const onSubmit = (data) => {
    append(data)
    resetField('title')
    resetField('question[0]')
    resetField('question[1]')
    resetField('question[2]')
    resetField('question[3]')
    resetField('answer')
  }

  return (
    <div className="cards">
      <input className="counter question" value={`Adding questions | Questions - ${fields.length}`} disabled />
      <input placeholder="Question" autoComplete="off" {...register(`title`, { required: true } )} />
      <input placeholder="Answer 1" autoComplete="off" {...register(`question[0]`, { required: true } )} />
      <input placeholder="Answer 2" autoComplete="off" {...register(`question[1]`, { required: true } )} />
      <input placeholder="Answer 3" autoComplete="off" {...register(`question[2]`, { required: true } )} />
      <input placeholder="Answer 4" autoComplete="off" {...register(`question[3]`, { required: true } )} />
      <input placeholder="Correct answer *field number (1-4)*" {...register(`answer`, { required: true } )} />
      <button onClick={handleSubmit(onSubmit)} className="steps">Add a question</button><hr />
      Created questions:
      <div className="scrollwrapper"><div className="scrollExistingQ"></div>
        {
          fields.map((field, index) => {
            return (
              <div key={index} id={index} className="existingQ horizontal">
                <div>
                  <span className="existingQrow"><i className="fa fa-solid fa-question theme"></i> - {field.title}</span><br />
                  <span className="existingQrow"><i className="fa fa-solid fa-comment-dots theme"></i> - <ol><li>{field.question[0]}</li><li>{field.question[1]}</li><li>{field.question[2]}</li><li>{field.question[3]}</li></ol></span>
                  <span className="existingQrow"><i className="fa fa-solid fa-square-check theme"></i> - {field.answer}</span>
                </div>
                <div>
                  <span className="delete-card theme" onClick={() => remove(index)}><i className="fa fa-solid fa-trash"></i></span>
                </div>
              </div>
            )
          }).reverse()
        }
      </div>
    </div>
  )
}