import axios from "axios";

const API_URL = "http://localhost:3001/tickets";

const getAllTickets = async () => {
  const res = await axios.get(API_URL);
  return res.data; 
};

const ticketsService = {
  getAllTickets,

};

export default ticketsService;
