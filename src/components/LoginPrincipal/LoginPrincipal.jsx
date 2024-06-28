
import { Link } from 'react-router-dom';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';
import "./LoginPrincipal.scss"
import { Button } from '@chakra-ui/react';
import { FaLinkedin, FaReact } from "react-icons/fa";


const LoginPrincipal = () => {
  const typeUser = localStorage.getItem('validator');

  return (
    <>
      <div className="stepper">
        <div className="step highlighted"></div>
        <div className="step"></div>
        <div className="step"></div>
        <div className="step"></div>
        <div className="step"></div>
      </div>
      <div className="loginContainer">
        <div className='bienvenidos'>
          <h3>Bienvenid@ a</h3>
          <div className='logoImagen'>
            <img className="logo" src={logo} alt="Logo" />
          </div>
        </div>
        <div className='btn-container'>
          <Button className='btn-linkedin' bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
            <FaLinkedin className="iconLinkedin" /> Entrar con Linkedin
          </Button>
          <Button className='btn-google' bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
            <FaReact className='iconGoogle' /> Entrar con Google
          </Button>
          <div className='separator'>
            <hr className='line' />
            <span className='or'>o</span>
            <hr className='line' />
          </div>
          <Link to="/registerSegundoPaso">
            <Button className='btn-crearCuenta' bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
              Crear cuenta
            </Button>
          </Link>
          <Link to={typeUser === 'Attendee' ? "/loginAttendee" : "/loginSpeaker"}>
            <Button className='btn-iniciarSesion' bg="white" color="#4299E1" _hover={{ bg: '#eee' }} isFullWidth>
              Iniciar sesión
            </Button>
          </Link>
        </div>
      </div>
    </>

  );
}

export default LoginPrincipal;
