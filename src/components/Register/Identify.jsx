import logo1 from '../../assets/E-learning-Experience_Logo-Blanco.png';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react'
import './Identify.scss';
import '../../../colors.scss';


const Identify = () => {
  const navigate = useNavigate()
  const optionSelected = (event) => {
    const buttonSelected = event.target.name;
    if (buttonSelected === "Attendee") {
      localStorage.setItem("validator", "Attendee");
      navigate("/loginPrincipal");
  } else {
      localStorage.setItem("validator", "Speaker");
      navigate("/loginPrincipal");
  }
  };

  return (

    <div className="register-container">

      <h3 className='bienvenidos-text'>
        Bienvenid@ a
      </h3>

      <img src={logo1} alt="Logo" className="logo" />
      <div className="container-button">
      
      <Box mb={2}><button className="continue-button" name= "Attendee" onClick={optionSelected}>Ya estoy registrado</button></Box>


          <button className="continue-button" name = "Speaker" onClick={optionSelected}>Soy profesional</button>

      </div>
    </div>
  );
  };

  export default Identify;
