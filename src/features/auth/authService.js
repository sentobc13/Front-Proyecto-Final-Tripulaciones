import axios from "axios"

const API_URL = "http://localhost:8080/attendee"

const register = async (attendee)=>{
console.log(attendee)
  const res = await axios.post(API_URL, attendee)
  return res.data
}

const login = async (attendee)=>{
  const res = await axios.post(API_URL + "/login", attendee)
  if (res.data) {
    console.log(res.data)
    localStorage.setItem("attendee", JSON.stringify(res.data.attendee))
    localStorage.setItem("token", res.data.token)
  }
  return res.data
}

const authService = {
    register,
    login,
    
    
  }
  
  
  export default authService