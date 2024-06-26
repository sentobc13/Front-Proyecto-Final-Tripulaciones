import './Home.scss'; 

import logo1 from '../../assets/E-learning-Experience_Logo-Blanco.png';


const Home = () => {
  return (
    <div className="home-container">
      <img src={logo1} alt="Logo" className="logo" />
      <div className="buttons">
        <button className="button">Soy visitante</button>
        <button className="button">Soy ponente</button>
      </div>
    </div>
  );
};

export default Home;
