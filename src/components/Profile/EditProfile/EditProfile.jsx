import React, { useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import '../EditProfile/EditProfile.scss';

const EditProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Fernando');
  const [surname, setSurname] = useState('Redondo');
  const [bio, setBio] = useState('Fernando supervisa las ventas globales de productos de LVIS.');
  const [linkedin, setLinkedin] = useState('https://www.linkedin.com/in/fernando-redondo/');
  const [interests, setInterests] = useState(['E-learning', 'Tecnología', 'Emprendimiento']);
  const [foodPreferences, setFoodPreferences] = useState('');

  const handleSaveChanges = () => {
    console.log('Guardando cambios...');
    console.log({
      name,
      surname,
      bio,
      linkedin,
      interests,
      foodPreferences
    });
  };

  const handleDiscardChanges = () => {
    console.log('Descartando cambios...');
    setName('Fernando');
    setSurname('Redondo');
    setBio('Fernando supervisa las ventas globales de productos de LVIS.');
    setLinkedin('https://www.linkedin.com/in/fernando-redondo/');
    setInterests(['E-learning', 'Tecnología', 'Emprendimiento']);
    setFoodPreferences('');
  };

  const handleBack = () => {
    navigate('/profile');
  };

  const handleDeleteInterest = (interestToDelete) => {
    setInterests((prevInterests) => prevInterests.filter((interest) => interest !== interestToDelete));
  };

  return (
    <>
      <div className="topProfile">
        <p className="pProfile" onClick={handleBack}>
          <GoChevronLeft className="iconProfile" />
        </p>
      </div>
      <div className="profile-content">
        <div>
          <span className="titleNameProfile">Nombre</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputField"
          />
        </div>
        <div>
          <span className="titleNameProfile">Apellidos</span>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="inputField"
          />
        </div>
        <div>
          <span className="titleNameProfile">Biografía</span>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="textareaField"
          />
        </div>
        <div>
          <span className="titleNameProfile">Enlace a Linkedin</span>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="inputField"
          />
        </div>
        <div>
          <span className="titleNameProfile">Intereses</span>
          <div className="chipGrid">
            {interests.map((interest, index) => (
              <Chip
                key={index}
                label={interest}
                onDelete={() => handleDeleteInterest(interest)}
                className="uniqueChipProfile"
              />
            ))}
          </div>
        </div>
        <div>
          <span className="titleNameProfile">Preferencias alimenticias</span>
          <input
            type="text"
            value={foodPreferences}
            onChange={(e) => setFoodPreferences(e.target.value)}
            className="inputField"
          />
        </div>
      </div>
      <div className='containerButtonProfile'>
        <button className='SaveChanges' onClick={handleSaveChanges}>
          Guardar cambios
        </button>
        <button className='DiscardChanges' onClick={handleDiscardChanges}>
          Descartar
        </button>
      </div>
    </>
  );
};

export default EditProfile;
