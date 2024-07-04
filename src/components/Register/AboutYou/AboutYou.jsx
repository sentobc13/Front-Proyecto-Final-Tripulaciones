import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import './AboutYou.scss';

const AboutYou = () => {


  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    nationality: '',
    enterprise_name: '',
    phone: '',
    cargo: '',
    linkedin: '',
    partner_id: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const typeUser = localStorage.getItem('validator');
  const navigate = useNavigate()

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

    if (!formData.name) {
      errors.name = 'El nombre es requerido.';
    } else if (!formData.surname) {
      errors.surname = 'El apellido es requerido.';
    } else if (!formData.nationality) {
      errors.nationality = 'El país de residencia es requerido.';
    } else if (typeUser === 'Attendee' && !formData.phone) {
      errors.phone = 'El teléfono es requerido.';
    } else if (!formData.linkedin) {
      errors.linkedin = 'El LinkedIn es requerido.';
    } else if (typeUser === 'Speaker') {
      if (!formData.partner_id) {
        errors.partner_id = 'El codigo de verificacion del partner es requerido.';
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }



    const existingData = JSON.parse(localStorage.getItem('register')) || {};

    const updatedData = { ...existingData, ...formData };

    localStorage.setItem('register', JSON.stringify(updatedData));
    console.log("si");

    if (typeUser == 'Speaker') {
      navigate('/hastags');
    } else {
      navigate('/allergies');
    }
  };

  return (
    <>
      <div className="about-you-container">
        <div className="stepper">
          <div className="btn-back">
            <Link to="/connectLinkedin" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MdArrowBackIos style={{ fontSize: 18 }} />
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Samuel"
            />
            {formErrors.name && <p className="error">{formErrors.name}</p>}
          </label>
          <label>
            <p>Apellido<span className='importantAboutYou'> *</span></p>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Ramírez"
            />
            {formErrors.surname && <p className="error">{formErrors.surname}</p>}
          </label>
          <label>
            <p>País de residencia<span className='importantAboutYou'> *</span></p>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="Colombia"
            />
            {formErrors.nationality && <p className="error">{formErrors.nationality}</p>}
          </label>
          {typeUser === 'Speaker' && (
            <>
              <label>
                <p>Codigo del Partner<span className='importantAboutYou'> *</span></p>
                <input
                  type="text"
                  name="partner_id"
                  value={formData.partner_id}
                  onChange={handleChange}
                  placeholder="Colombia"
                />
                {formErrors.nationality && <p className="error">{formErrors.nationality}</p>}
              </label>
              <label>
                Empresa
                <input
                  type="text"
                  name="enterprise_name"
                  value={formData.enterprise_name}
                  onChange={handleChange}
                  placeholder="Nombre de la empresa..."
                />
              </label>
            </>
          )}
          {typeUser === 'Attendee' && (
            <label>
              <p>Teléfono<span className='importantAboutYou'> *</span></p>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 63459392"
              />
              {formErrors.phone && <p className="error">{formErrors.phone}</p>}
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
          <div className="container-button">
            <button className="continue-button" type="submit">Siguiente</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AboutYou;
