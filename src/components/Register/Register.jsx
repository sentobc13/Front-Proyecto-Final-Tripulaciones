import logo1 from '../../assets/E-learning-Experience_Logo-Blanco.png';
import { Link } from 'react-router-dom';
import './Register.scss'; 


const Register = () => {

  return (
    
    <div className="register-container">
       
            <h3>
                Bienvenid@ a
            </h3>
       
      <img src={logo1} alt="Logo" className="logo" />
      <div className="buttons">
        <Link to="/connectLinkedin">
          <button className="button">Soy visitante</button>
        </Link>
        <Link to="/speaker">
          <button className="button">Soy profesional</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
