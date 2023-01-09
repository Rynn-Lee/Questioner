const date = new Date()
const day = date.getDate()
const month = date.getMonth()+1
const year = date.getFullYear()

export const resultsService = {
//TODO Сделать отдельный сервис для результатов
//TODO Переименовать тесты в результаты
  addResult(result, user){
    if(!localStorage.getItem('results')) localStorage.setItem('results', JSON.stringify([]))
    const storageResults = JSON.parse(localStorage.getItem('results'))
    const id = Math.floor(Math.random(10) * 10000)

    const newResult = {
      id,
      date:`${day}-${month}-${year}`,
      ...result,
      ...user
    }
    localStorage.setItem('results', JSON.stringify([...storageResults, newResult]))
  },

  fetchResults(user){
    if(!localStorage.getItem('results') || JSON.parse(localStorage.getItem('results')).length === 0){
      localStorage.setItem('results', JSON.stringify([]))
    }
    const storage = localStorage.getItem('results')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.filter((testResult) => testResult.user === user);
    return filtered
  },

  fetchOtherResults(user){
    const storage = localStorage.getItem('results')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.filter((testResult) => testResult.author === user && testResult.user !== user);
    return filtered
  },

  removeResult(id){
    const storage = localStorage.getItem('results')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.filter((tester) => tester.id !== id);
    localStorage.setItem('results', JSON.stringify(filtered))
    return filtered
  }
}