import logo1 from '../../assets/E-learning-Experience_Logo-Blanco.png';
import { Link } from 'react-router-dom';

const Register = () => {

  return (
    <div className="home-container">
      <img src={logo1} alt="Logo" className="logo" />
      <div className="buttons">
        <Link to="/loginPrincipal">
          <button className="button">Soy visitante</button>
        </Link>
        <Link to="/loginPrincipal">
          <button className="button">Soy profesional</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
