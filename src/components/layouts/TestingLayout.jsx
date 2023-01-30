export const TestingLayout = ({children, progress}) => {
  const isProgress = typeof progress !== 'undefined'
  // const isTimeProgress = typeof timeProgress !== 'undefined'
  return (
    <>
      {isProgress && <div style={{ width: `${progress}%` }} className="progress-bar-2" />}
      <div>{children}</div>
    </>
  )
}