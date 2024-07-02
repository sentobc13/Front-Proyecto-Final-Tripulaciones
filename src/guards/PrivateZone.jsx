import { Navigate } from "react-router-dom"

const PrivateZone = ({ children }) => {
  const isLoggedIn  = Boolean(localStorage.getItem("Attendee")) || Boolean(localStorage.getItem("Speaker"))  
  return isLoggedIn  ? children : <Navigate to="/identify" />;
};

export default PrivateZone