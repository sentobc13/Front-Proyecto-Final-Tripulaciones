import logo1 from '../../assets/E-learning-Experience_Logo-Blanco.png';
import { useNavigate } from 'react-router-dom';
import './Identify.scss';


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
      <div className="buttons">

          <button className="button" name = "Attendee" onClick={optionSelected}>Ya estoy</button>


          <button className="button" name = "Speaker" onClick={optionSelected}>Soy profesional</button>

      </div>
    </div>
  );
  };

  export default Identify;
