import axios from "axios"

const API_URL = "http://localhost:3001/registrationWorkshop/"


const registerRegistrationWorkshop = async (workshop_id, scheduled_time) => {
  
  const token = localStorage.getItem("token");
  const res = await axios.post(API_URL + "/" + workshop_id , scheduled_time,{
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const registrationWorkshop = {

    registerRegistrationWorkshop
  
}


export default registrationWorkshop