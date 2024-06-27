import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div class="stepper">
    <div class="step"></div>
    <div class="step"></div>
    <div class="step"></div>
    <div class="step highlighted"></div>
    <div class="step"></div>
</div>
    <div className="about-you-container">
      <div>
        <h2>Sobre ti</h2>
      </div>

      <form className="containerAboutYouForm" onSubmit={handleNext}>
        <p>
          <label>
            Nombre
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Apellido
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            País de residencia
            <input type="text" name="pais" value={formData.pais} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Empresa
            <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Teléfono
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Cargo
            <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Linkedin
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} />
          </label>
        </p>
        <div className="BadgecontainerAboutYouButton">
          <button type="submit">Siguiente</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AboutYou;
