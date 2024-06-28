import { Navigate } from "react-router-dom"

const PrivateZone = ({ children }) => {
  const logged = localStorage.getItem("attendee") || localStorage.getItem("speaker") 
  return logged ? children : <Navigate to="/loginprincipal" />;
};

export default PrivateZone