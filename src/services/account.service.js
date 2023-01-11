import { services } from "."

export const accountService = {
  checkSession(){
    !localStorage.getItem("accounts") && localStorage.setItem("accounts", JSON.stringify([]))
    const result = sessionStorage.getItem("account")
    const parsedResult = JSON.parse(result)
    return parsedResult
  },
  login(login, password){
    const result = localStorage.getItem("accounts")
    const parsedResult = JSON.parse(result)
    const filtered = parsedResult.find((account) => account.login === login)
    if(!filtered) return "User not found"
    else{
      if(filtered.password !== password){
        return "Incorrect password"
      }
      else{
        sessionStorage.setItem("account", JSON.stringify(filtered))
        return true
      }
    }
  },
  register(data){
    const result = localStorage.getItem("accounts")
    const parsedResult = JSON.parse(result)
    const filtered = parsedResult.find((account) => account.login === data.login)
    if(!filtered) {
      localStorage.setItem("accounts", JSON.stringify([...parsedResult, data]))
      services.account.login(data.login, data.password)
      return true
    }
    else{
      return "User already exists"
    }
  },
  logout(){
    sessionStorage.clear()
    return true
  }
}