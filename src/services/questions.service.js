import { services } from "."

const date = new Date()
const day = date.getDate()
const month = date.getMonth()+1
const year = date.getFullYear()

export const questionsService = {
  fetchAll(user) {
    if(!localStorage.getItem('questions') || JSON.parse(localStorage.getItem('questions')).length === 0){
      localStorage.setItem('questions', JSON.stringify([]))
    }
    const storage = localStorage.getItem('questions')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.filter((test) => test.author === user);
    return filtered
  },

  addTest(newTest){
    const storage = localStorage.getItem('questions')
    const activeAccount = services.account.checkSession()
    let parsedstorage = JSON.parse(storage)
    newTest = JSON.parse(newTest)
    const id = activeAccount.login + "_" + Math.floor(Math.random(10) * 999999)
    const additional = {
      id,
      date:`${day}-${month}-${year}`,
      author: activeAccount.login
    }
    Object.assign(newTest, additional)
    parsedstorage.push(newTest)
    localStorage.setItem('questions', JSON.stringify(parsedstorage))
  },

  fetchOpen(user){
    if(!localStorage.getItem('questions') || JSON.parse(localStorage.getItem('questions')).length === 0){
      localStorage.setItem('questions', JSON.stringify([]))
    }
    const storage = localStorage.getItem('questions')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.filter((test) => test.open === true && test.author !== user);
    return filtered
  },

  fetchOne(id){
    const storage = localStorage.getItem('questions')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.find((el, index) => el.id === id)
    return filtered
  },


  remove(id, user){
    const storage = localStorage.getItem('questions')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.filter((questioner) => questioner.id !== id && questioner.author === user);
    localStorage.setItem('questions', JSON.stringify(filtered))
    return filtered
  },

//TODO Сделать отдельный сервис для результатов
//TODO Переименовать тесты в результаты
}