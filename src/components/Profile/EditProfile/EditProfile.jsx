import React, { useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import Chip from '@mui/material/Chip';
// import '../../Profile/Profile.scss';

const EditProfile = () => {
  const [name, setName] = useState('Fernando');
  const [surname, setSurname] = useState('Redondo');
  const [bio, setBio] = useState('Fernando supervisa las ventas globales de productos de LVIS.');
  const [linkedin, setLinkedin] = useState('https://www.linkedin.com/in/fernando-redondo/');
  const [interests, setInterests] = useState(['E-learning', 'Tecnología', 'Emprendimiento']);
  const [foodPreferences, setFoodPreferences] = useState('');

  const handleSaveChanges = () => {
    // Aquí iría la lógica para guardar los cambios (por ahora solo mostraremos los datos en consola)
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
    // Aquí iría la lógica para descartar los cambios (por ahora solo resetearemos los estados)
    console.log('Descartando cambios...');
    setName('Fernando');
    setSurname('Redondo');
    setBio('Fernando supervisa las ventas globales de productos de LVIS.');
    setLinkedin('https://www.linkedin.com/in/fernando-redondo/');
    setInterests(['E-learning', 'Tecnología', 'Emprendimiento']);
    setFoodPreferences('');
  };

  return (
    <>
      <div className="topProfile">
        <p className="pProfile">
          <GoChevronLeft className="iconProfile" />
          <span className="profileEdit">Editar perfil</span>
        </p>
      </div>
      <div className="profile-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/a56f/6697/8a2b86f7a89eb3ed76a431148a72f3e6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHxXqJAkFm4ztlInhUPCZnHYV7XD2d7KYaIt9kHiPlAyxHBBu32YrGvywK~XMy-A3HQb~aMZQD6HpYVobMGvugIZFmsV0heAb0dDNV5X6VwDqFmVtk5Up1knh3-A~IcwQbLuw52LHkEjFUmlgYS2WuV5aQriJ~egFgkRIzrVMVwYh-sUxJVb~bbmhvoDOa0S931luy3KniC2151KifpxZ32wcj1UBcDkGEbQh4Ajw7T4PzSi8HOh9TgSZ7IBimxcQ2~D2wPqoJurjsdwCYNfWn7ZJmiXHK-gE979YNfDs0vQuO78mr~PybiuiRU-ZcfyD2WS~yYanf4JiCtLEaRGeg__"
          alt="Foto de Perfil"
          className="profile-picture"
        />
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
              className="uniqueChipProfile"
            />
          ))}
        </div>
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
        <button className='ShowQR'>
          Mostrar Código QR
        </button>
        <div className="editButtons">
          <button className="SaveChanges" onClick={handleSaveChanges}>
            Guardar cambios
          </button>
          <button className="DiscardChanges" onClick={handleDiscardChanges}>
            Descartar cambios
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
