import logo1 from '../../assets/E-learning-Experience_Logo-Blanco.png';
import { Link } from 'react-router-dom';

const Register = () => {

  return (
    
    <div className="home-container">
       
            <h3>
                Bienvenid@ a
            </h3>
       
      <img src={logo1} alt="Logo" className="logo" />
      <div className="buttons">
        <Link to="/attendee">
          <button className="button">Soy visitante</button>
        </Link>
        <Link to="/speaker">
          <button className="button">Soy ponente</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
