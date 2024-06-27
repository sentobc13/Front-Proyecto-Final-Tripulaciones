import React, { useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import Chip from '@mui/material/Chip';
import '../EditProfile/EditProfile.scss';

const EditProfile = () => {
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
    // Aquí iría la lógica para guardar los cambios
  };

  const handleAddInterest = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setInterests([...interests, e.target.value.trim()]);
      e.target.value = '';
    }
  };

  const handleRemoveInterest = (index) => {
    setInterests(interests.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="topProfile">
        <p className="pProfile">
          <GoChevronLeft className="iconProfile" />
          <span className="profileEdit">Editar perfil</span>
        </p>
      </div>
      <div>
        <span className="titleNameProfile">Nombre:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inputField"
        />
      </div>
      <div>
        <span className="titleNameProfile">Apellido:</span>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="inputField"
        />
      </div>
      <div>
        <span className="titleNameProfile">Biografía:</span>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="textareaField"
        />
      </div>
      <div>
        <span className="titleNameProfile">Linkedin:</span>
        <input
          type="text"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className="inputField"
        />
      </div>
      <div>
        <span className="titleNameProfile">Intereses:</span>
        <div className="chipGrid">
          {interests.map((interest, index) => (
            <Chip
              key={index}
              label={interest}
              onDelete={() => handleRemoveInterest(index)}
              className="uniqueChipProfile"
            />
          ))}
        </div>
        <input
          type="text"
          placeholder="Añadir interés"
          onKeyDown={handleAddInterest}
          className="inputField"
        />
      </div>
      <div>
        <span className="titleNameProfile">Preferencias alimenticias:</span>
        <input
          type="text"
          value={foodPreferences}
          onChange={(e) => setFoodPreferences(e.target.value)}
          className="inputField"
        />
      </div>
      <div className='containerButtonProfile'>
        <button className="SaveChanges" onClick={handleSaveChanges}>
          Guardar cambios
        </button>
      </div>
    </>
  );
};

export default EditProfile;
