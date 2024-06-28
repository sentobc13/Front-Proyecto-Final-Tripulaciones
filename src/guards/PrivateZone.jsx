import { Navigate } from "react-router-dom"

const PrivateZone = ({ children }) => {
  const isLoggedIn  = Boolean(localStorage.getItem("attendee")) || Boolean(localStorage.getItem("speaker"))  
  return isLoggedIn  ? children : <Navigate to="/identify" />;
};

export default PrivateZone