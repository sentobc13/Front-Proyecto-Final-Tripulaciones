import axios from "axios"

const user = JSON.parse(localStorage.getItem('attendee')) || JSON.parse(localStorage.getItem('speaker'));

const getSpeakersRecomended = async ()=>{
    const token = localStorage.getItem("token");
    const res = await axios.get("https://api-match-1.onrender.com/similarity/" + user._id ,{
      headers: {
        authorization: token,
      },
    })
    return res.data
  }


  const getSpeakersRecomendedService = {
    getSpeakersRecomended
  }
  
  
  export default getSpeakersRecomendedService