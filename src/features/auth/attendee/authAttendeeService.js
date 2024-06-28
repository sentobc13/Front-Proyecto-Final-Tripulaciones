import axios from "axios"

const API_URL = "http://localhost:3001/attendee"

const registerAttendee = async (attendee)=>{
console.log(attendee)
  const res = await axios.post(API_URL + "/registerAttendee", attendee)
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

const authAttendeeService = {
    registerAttendee,
    login,
    
    
  }
  
  
  export default authAttendeeService