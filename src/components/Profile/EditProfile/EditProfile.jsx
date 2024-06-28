import React, { useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { useNavigate } from 'react-router-dom'; // Si usas react-router-dom para la navegación
import Chip from '@mui/material/Chip';
import '../EditProfile/EditProfile.scss'

const EditProfile = () => {
  const [name, setName] = useState('Fernando');
  const [surname, setSurname] = useState('Redondo');
  const [bio, setBio] = useState('Fernando supervisa las ventas globales de productos de LVIS.');
  const [linkedin, setLinkedin] = useState('linkedin.com/in/fernandoredondo');
  const [interests, setInterests] = useState(['Inteligencia Artificial', 'Diversidad', 'Formación asd']);
  const [foodPreferences, setFoodPreferences] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  
  const navigate = useNavigate();

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
    setIsEditing(false);
  };

  const handleDiscardChanges = () => {
    console.log('Descartando cambios...');
    setName('Fernando');
    setSurname('Redondo');
    setBio('Fernando supervisa las ventas globales de productos de LVIS.');
    setLinkedin('linkedin.com/in/fernandoredondo');
    setInterests(['Inteligencia Artificial', 'Diversidad', 'Formación asd']);
    setFoodPreferences('');
    setIsEditing(false);
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
        <div className="pProfile" onClick={() => navigate('/profile')}>
          <GoChevronLeft className="iconProfile" />
        </div>
        <span className="profileEdit" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancelar' : 'Editar perfil'}
        </span>
      </div>
      <div className="profile-content">
        <div>
          <span className="titleNameProfile">Nombre:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputField"
            disabled={!isEditing}
          />
        </div>
        <div>
          <span className="titleNameProfile">Apellidos:</span>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="inputField"
            disabled={!isEditing}
          />
        </div>
        <div>
          <span className="titleNameProfile">Biografía:</span>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="textareaField"
            disabled={!isEditing}
          />
        </div>
        <div>
          <span className="titleNameProfile">Enlace a Linkedin:</span>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="inputField"
            disabled={!isEditing}
          />
        </div>
        <div>
          <span className="titleNameProfile">Intereses:</span>
          <div className="chipGrid">
            {interests.map((interest, index) => (
              <Chip
                key={index}
                label={interest}
                onDelete={isEditing ? () => handleRemoveInterest(index) : null}
                className="uniqueChipProfile"
              />
            ))}
            {isEditing && (
              <input
                type="text"
                placeholder="Añadir interés"
                onKeyDown={handleAddInterest}
                className="inputField"
              />
            )}
          </div>
        </div>
        <div>
          <span className="titleNameProfile">Preferencias alimenticias:</span>
          <input
            type="text"
            value={foodPreferences}
            onChange={(e) => setFoodPreferences(e.target.value)}
            className="inputField"
            disabled={!isEditing}
          />
        </div>
      </div>
      {isEditing && (
        <div className="containerButtonProfile">
          <button className="SaveChanges" onClick={handleSaveChanges}>
            Guardar cambios
          </button>
          <button className="DiscardChanges" onClick={handleDiscardChanges}>
            Descartar
          </button>
        </div>
      )}
    </>
  );
};

export default EditProfile;
