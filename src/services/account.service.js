import { supabase } from '../client'

export const accountService = {
  checkSession(){
    const result = sessionStorage.getItem("account")
    const parsedResult = JSON.parse(result)
    return parsedResult
  },
  async login(login, password){
    const result = await supabase.from('accounts').select().eq('login', login)
    if(!result.data.length)
      return "User doesn't exist!"
    if(result.data[0].password !== password)
      return "Password doesn't match!"
    sessionStorage.setItem("account", JSON.stringify(result.data[0]));
      return true
  },
  async register(data){
    const result = await supabase.from('accounts').select().eq('login', data.login)
    if(result.data.length) return "User already exists"

    await supabase.from('accounts').insert(data)
    sessionStorage.setItem("account", JSON.stringify(data));
    return true
  },
  logout(){
    sessionStorage.clear()
    return true
  }
}