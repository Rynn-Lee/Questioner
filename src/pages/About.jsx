import {PageLayout} from '../components/layouts/PageLayout'

export const About = () => {
  return(
    <PageLayout title="About the project">
      Project author: _RynnLee<br />
      Date of development beginning: 21-dec-2022<br />
      <a href="https://github.com/rynn-lee/questioner" target="_blank" rel="noreferrer">Github page (clickable)</a>
    </PageLayout>
  )
}