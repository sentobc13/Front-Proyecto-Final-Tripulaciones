import axios from 'axios';

const API_URL = 'http://localhost:3001/notifications';

const getAllNotifications = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.get(API_URL , {
        headers: {
          authorization: token,
        },
      });
    return response.data;
};

export default {
    getAllNotifications,
};
