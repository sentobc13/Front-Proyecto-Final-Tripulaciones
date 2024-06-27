import { Navigate } from "react-router-dom"

const PrivateZone = ({ children }) => {
  const logged = localStorage.getItem("Attendee") || localStorage.getItem("Speaker") 
  return logged ? children : <Navigate to="/loginprincipal" />;
};

export default PrivateZone