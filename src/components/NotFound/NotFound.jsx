import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <p>Error 404 - Page Not Found</p>
     <Link to="/">Go to Home</Link> 
    </div>
  );
};

export default NotFound;
