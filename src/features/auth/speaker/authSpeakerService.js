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

const getLoggedSpeaker = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(API_URL + "/" , {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const getSpeaker = async (speaker_id)=>{
  const token = localStorage.getItem("token");
  const res = await axios.get(API_URL + "/getSpeaker" + speaker_id , token )
  if (res.data) {
    console.log(res.data)

  }
  return res.data
}



const authSpeakerService = {
    registerSpeaker,
    login,
    getSpeaker,
<<<<<<< HEAD
    getLoggedSpeaker
=======

>>>>>>> e8ffdafaf3a62601f8d789118d26f3132abe8018
  }
  
  
  export default authSpeakerService