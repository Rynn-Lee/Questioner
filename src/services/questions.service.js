import { services } from "."
import { supabase } from "../client"

const date = new Date()
const day = date.getDate()
const month = date.getMonth()+1
const year = date.getFullYear()

export const questionsService = {
  async fetchAll(user) {
    const results = await supabase.from('questions').select().eq('author', user)
    return results.data
  },

  async addTest(newTest){
    const activeAccount = services.account.checkSession()
    newTest = JSON.parse(newTest)
    const id = activeAccount.login + "_" + Math.floor(Math.random(10) * 999999)
    const additional = {
      testid: id,
      date:`${day}-${month}-${year}`,
      author: activeAccount.login
    }
    const newResult = {
      ...newTest,
      ...additional
    }
    console.log(newResult)
    await supabase.from('questions').insert(newResult)
    return true
  },

  async fetchOpen(user){
    const results = await supabase.from('questions').select().eq('open', true).neq('author', user)
    return results.data
  },

  async fetchOne(id){
    const results = await supabase.from('questions').select().eq('testid', id)
    return results.data[0]
  },

  async remove(id, user){
    await supabase.from('questions').delete().eq('testid', id)
    return await this.fetchAll(user)
  },

//TODO Сделать отдельный сервис для результатов
//TODO Переименовать тесты в результаты
}