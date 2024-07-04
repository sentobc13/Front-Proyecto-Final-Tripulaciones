import axios from "axios"

const user = JSON.parse(localStorage.getItem('attendee')) || JSON.parse(localStorage.getItem('speaker'));

const getSpeakersRecomended = async () => {
  const id = {
    "id": user.id
  }

  const res = await axios.post("https://api-match-1.onrender.com/similarity/", id)
  return res.data
}


const getSpeakersRecomendedService = {
  getSpeakersRecomended
}


export default getSpeakersRecomendedService