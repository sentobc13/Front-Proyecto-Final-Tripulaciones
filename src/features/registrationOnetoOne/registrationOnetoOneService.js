import axios from "axios"

const API_URL = "http://localhost:3001/registrationOne2One"


const registerOnetoOne = async (horariosSeleccionado, speaker_id) => {
  const reservarOne2One = { scheduled_time: horariosSeleccionado, speaker_id:speaker_id}
  const token = localStorage.getItem("token");
  const res = await axios.post(API_URL + "/createForOne2One" , reservarOne2One,{
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const registrationOne2OneService = {

  registerOnetoOne
  
}


export default registrationOne2OneService