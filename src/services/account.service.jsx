import { supabase } from '../client'

function hasWhiteSpace(str) {
  return str.indexOf(' ') >= 0;
}

function hasEmail(str) {
  return str.includes('@');
}

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
    const isEmailInUse = await supabase.from('accounts').select().eq('email', data.email)

    if(!data.login || !data.password || !data.email)
      return "Fill in all the fields!"
    if(result.data.length)
      return "This user already exists"
    if(hasWhiteSpace(data.login))
      return "Whitespaces are not allowed!"
    if(data.login.length >= 26)
      return "Login is longer than 26"
    if(data.login.length < 6)
      return "Login is less than 6"
    if(!hasEmail(data.email) || data.email.length < 12)
      return "Incorrect Email!"
    if(isEmailInUse.data.length)
      return "This email is already in use!"
    if(data.password.length <= 8)
      return "Password is less than 8"

    await supabase.from('accounts').insert(data)
    sessionStorage.setItem("account", JSON.stringify(data));
    return true
  },
  logout(){
    sessionStorage.clear()
    return true
  }
}
