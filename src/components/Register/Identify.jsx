import logo1 from '../../assets/E-learning-Experience_Logo-Blanco.png';
import { useNavigate } from 'react-router-dom';
import './Identify.scss';


const Identify = () => {
  const navigate = useNavigate()
  const optionSelected = (event) => {
    const buttonSelected = event.target.name;
    if (buttonSelected === "Attendee") {
      localStorage.setItem("validator", JSON.stringify("Attendee"));
      navigate("/loginAttendee");
  } else {
      localStorage.setItem("validator", JSON.stringify("Speaker"));
      navigate("/loginSpeaker");
  }
  };
    

  return (

    <div className="register-container">

      <h3>
        Bienvenid@ a
      </h3>

      <img src={logo1} alt="Logo" className="logo" />
      <div className="buttons">

          <button className="button" name = "Attendee" onClick={optionSelected}>Soy visitante</button>


          <button className="button" name = "Speaker" onClick={optionSelected}>Soy profesional</button>

      </div>
    </div>
  );
  };

  export default Identify;