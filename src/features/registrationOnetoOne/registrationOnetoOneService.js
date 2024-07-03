import axios from "axios";

const API_URL = "http://localhost:3001/registrationOne2One";

const registerOnetoOne = async (horariosSeleccionado, speaker_id) => {
  const reservarOne2One = {
    scheduled_time: horariosSeleccionado,
    speaker_id: speaker_id
  };
  const token = localStorage.getItem("token");
  try {
    const res = await axios.post(`${API_URL}/createForOne2One`, reservarOne2One, {
      headers: {
        authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error registering for One to One session:", error);
    throw error;
  }
};

const confirmOne2One = async (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const res = await axios.put(`${API_URL}/confirmOne2One/${id}`,"" , {
      headers: {
        authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error updating One to One session:", error);
    throw error;
  }
};

const rejectOne2One = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.put(`${API_URL}/confirmOne2One/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error updating One to One session:", error);
    throw error;
  }
};

const registrationOne2OneService = {
  registerOnetoOne,
  rejectOne2One,
  confirmOne2One
};

export default registrationOne2OneService;