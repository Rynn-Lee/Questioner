import { supabase } from '../client'

export const resultsService = {
  async addResult(result, user){
    const newResult = {
      ...result,
      ...user,
      date: new Date()
    }
    await supabase.from('results').insert(newResult)
    return true
  },

  async fetchResults(user){
    const results = await supabase.from('results').select().eq('user', user)
    return results.data
  },

  async fetchOtherResults(user){
    const results = await supabase.from('results').select().eq('author', user).neq('user', user)
    return results.data
  },

  async removeResult(id, login){
    await supabase.from('results').delete().eq('testid', id)
    return this.fetchResults(login);
  }
}