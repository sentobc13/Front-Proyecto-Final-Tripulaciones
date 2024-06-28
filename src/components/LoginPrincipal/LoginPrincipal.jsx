import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';
import "./LoginPrincipal.scss"
import { Button } from '@chakra-ui/react';
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


const LoginPrincipal = () => {

  const typeUser = localStorage.getItem('validator')

  return (
    <div className="loginContainer">
      <div className='bienvenidos'>
        <h3>Bienvenid@ a</h3>
        <div className='logoImagen'>
          <img className="logo" src={logo} alt="Logo" />
        </div>
      </div>
      <div className='btn-container'>
        <div>
          <Button className='btn-linkedin' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
            <FaLinkedin className="iconLinkedin" /> Entrar con Linkedin
          </Button>
        </div>

        <div>
          <Button className='btn-google' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
            <FaReact className='iconGoogle' /> Entrar con Google
          </Button>
        </div>
        <div className='separator'>
          <hr className='line' />
          <span className='or'>o</span>
          <hr className='line' />
        </div>
        <div>
          <Link to="/registerSegundoPaso">
            <Button className='btn-crearCuenta' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
              Crear cuenta
            </Button>
          </Link>
        </div>
        <div>
          {
            typeUser == 'Attendee' ? (
              <Link to="/loginAttendee">
                <Button className='btn-iniciarSesion' type="submit" bg="white" color="#4299E1" _hover={{ bg: '#eee' }} isFullWidth>
                  Iniciar sesión
                </Button>
              </Link>
            ) : (
              <Link to="/loginSpeaker">
                <Button className='btn-iniciarSesion' type="submit" bg="white" color="#4299E1" _hover={{ bg: '#eee' }} isFullWidth>
                  Iniciar sesión
                </Button>
              </Link>
            )
          }

        </div>
      </div>
    </div>
  )



}

export default LoginPrincipal;