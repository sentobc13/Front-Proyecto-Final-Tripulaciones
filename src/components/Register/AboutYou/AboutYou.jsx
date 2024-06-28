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

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const typeUser = localStorage.getItem('validator');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.nombre) {
      errors.nombre = 'El nombre es requerido.';
    } else if (!formData.apellido) {
      errors.apellido = 'El apellido es requerido.';
    } else if (!formData.pais) {
      errors.pais = 'El país de residencia es requerido.';
    } else if (typeUser === 'Attendee' && !formData.telefono) {
      errors.telefono = 'El teléfono es requerido.';
    } else if (!formData.linkedin) {
      errors.linkedin = 'El LinkedIn es requerido.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const existingData = JSON.parse(localStorage.getItem('register')) || {};

    const updatedData = { ...existingData, ...formData };

    localStorage.setItem('register', JSON.stringify(updatedData));

    if(typeUser == 'Speaker') {
      navigate('/hastags');
    }else{
      navigate('/allergies');
    }
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
        <h2 className="heading">Sobre ti</h2>
        <form className="containerAboutYouForm" onSubmit={handleNext}>
          <label>
            <p>Nombre<span className='importantAboutYou'> *</span></p>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Samuel"
            />
            {formErrors.nombre && <p className="error">{formErrors.nombre}</p>}
          </label>
          <label>
            <p>Apellido<span className='importantAboutYou'> *</span></p>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Ramírez"
            />
            {formErrors.apellido && <p className="error">{formErrors.apellido}</p>}
          </label>
          <label>
            <p>País de residencia<span className='importantAboutYou'> *</span></p>
            <input
              type="text"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              placeholder="Colombia"
            />
            {formErrors.pais && <p className="error">{formErrors.pais}</p>}
          </label>
          {typeUser === 'Speaker' && (
            <label>
              Empresa
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Nombre de la empresa..."
              />
            </label>
          )}
          {typeUser === 'Attendee' && (
            <label>
              <p>Teléfono<span className='importantAboutYou'> *</span></p>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+34 63459392"
              />
              {formErrors.telefono && <p className="error">{formErrors.telefono}</p>}
            </label>
          )}
          <label>
            Cargo
            <input
              type="text"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              placeholder="CEO, Administrador..."
            />
          </label>
          <label>
            <p>LinkedIn<span className='importantAboutYou'> *</span></p>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/in/samuelramirez"
            />
            {formErrors.linkedin && <p className="error">{formErrors.linkedin}</p>}
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
