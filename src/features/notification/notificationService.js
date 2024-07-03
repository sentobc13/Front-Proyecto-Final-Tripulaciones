import axios from 'axios';

const API_URL = 'http://localhost:3001/notifications';

const getAllNotifications = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: token,
        },
    });
    return response.data;
};

const updateNotification = async (newData) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`${API_URL}/id/${newData._id}`, newData, {
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) { 
        console.error(`Error updating notification ${newData._id}:`, error);
        return { data: null, error: 'Error updating notification' };
    }
};

export default {
    getAllNotifications,
    updateNotification,
};
