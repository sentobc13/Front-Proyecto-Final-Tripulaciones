import axios from "axios";

const API_URL = "http://localhost:3001/workshop";

const getWorkshop = async () => {
    try {
        const res = await axios.get(API_URL);
        return res.data;
    } catch (error) {
        console.error("Error al obtener talleres:", error);
        throw error;
    }
};

const authAttendeeService = {
    getWorkshop,
};

export default authAttendeeService;
