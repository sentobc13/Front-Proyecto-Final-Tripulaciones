import axios from "axios"

const API_URL = "https://backend-desafio-1yqs.onrender.com/attendee"

const registerAttendee = async (attendee)=>{
  const res = await axios.post(API_URL + "/registerAttendee", attendee)
  return res.data
}

const login = async (attendee)=>{
  const res = await axios.post(API_URL + "/login", attendee)
  if (res.data) {
    localStorage.setItem("attendee", JSON.stringify(res.data.attendee))
    localStorage.setItem("token", res.data.token)
  }
  return res.data
}
const getLoggedAttendee = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(API_URL + "/" , {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};
const getAttendeeById = async (id) => {
  const token = localStorage.getItem("token");
  const res = await axios.get(API_URL + "/getAttendeeById/" + id , {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};
const getAllAttendees = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(API_URL + "/getAttendees" , {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};
const updateAttendee = async (attendee)=>{
  const token = localStorage.getItem("token");
  const res = await axios.put(API_URL + "/updateAttendee",attendee ,{
    headers: {
      authorization: token,
    },
  })
  if (res.data) {
    localStorage.setItem("attendee", JSON.stringify(res.data.attendee))

  }
  return res.data
}

 

const authAttendeeService = {
  registerAttendee,
  login,
  getLoggedAttendee,
  getAllAttendees,
  updateAttendee,
  getAttendeeById
  
}


export default authAttendeeService