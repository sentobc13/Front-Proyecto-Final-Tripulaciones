import axios from "axios";

const API_URL = "https://backend-desafio-c3ws.onrender.com/tickets";

const getAllTickets = async () => {
  const res = await axios.get(API_URL);
  return res.data; 
};

const ticketsService = {
  getAllTickets,

};

export default ticketsService;
