import axios from "axios"

const API_URL = "http://localhost:3001/speaker"

const registerSpeaker = async (speaker)=>{
  const res = await axios.post(API_URL + "/registerSpeaker", speaker)
  return res.data
}

const login = async (speaker)=>{
  const res = await axios.post(API_URL + "/login", speaker)
  if (res.data) {
    console.log(res.data)
    localStorage.setItem("speaker", JSON.stringify(res.data.speaker))
    localStorage.setItem("token", res.data.token)
  }
  return res.data
}

const authSpeakerService = {
    registerSpeaker,
    login,
  }
  
  
  export default authSpeakerService