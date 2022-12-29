import {classNames} from "../../utils/classnames"

export const PageLayout = ({children, title, progress}) => {
  const isProgress = typeof progress !== 'undefined'
  return (
    <div className="content-wrapper">
      <div className={classNames("page-title", isProgress && 'extended')}>
        {title}
        {isProgress && <div style={{ width: `${progress}%` }} className="progress-bar" />}
      </div>
      <div className="content">{children}</div>
    </div>
  )
  // progressBar.style.setProperty('--progress-bar', (step+1)*(100/children.length)+"%")
}
