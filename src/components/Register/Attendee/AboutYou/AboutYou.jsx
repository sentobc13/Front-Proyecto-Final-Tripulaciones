import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import './AboutYou.scss';


const AboutYou = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    pais: '',
    empresa: '',
    telefono: '',
    cargo: '',
    linkedin: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();

    console.log(formData);
    navigate('/allergies');
  };

  return (
    <>
      <div className="about-you-container">
          <div className="stepper">
          <div className="btn-back">
            <Link to="/connectLinkedin" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MdArrowBackIos style={{ fontSize: 18 }} /> {/* Ajusta el tamaño del ícono según tus necesidades */}
            </Link>
          </div>
            <div className="step"></div>
            <div className="step"></div>
            <div className="step highlighted"></div>
            <div className="step"></div>
            <div className="step"></div>
          </div>
        </div>


      <div className="about-you-container">
        <h2>Sobre ti</h2>
        <form className="containerAboutYouForm" onSubmit={handleNext}>
          <label>
            Nombre
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Samuel" />
          </label>
          <label>
            Apellido
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Ramírez" />
          </label>
          <label>
            País de residencia
            <input type="text" name="pais" value={formData.pais} onChange={handleChange} placeholder="Colombia" />
          </label>
          <label>
            Empresa
            <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nombre de la empresa..." />
          </label>
          <label>
            Teléfono
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+34 63459392" />
          </label>
          <label>
            Cargo
            <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} placeholder="CEO, Administrador..." />
          </label>
          <label>
            Linkedin
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="linkedin.com/in/samuelramirez" />
          </label>
          <div className="BadgecontainerButton">
            <button type="submit">Siguiente</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AboutYou;
