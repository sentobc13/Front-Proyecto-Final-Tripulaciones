import React, { useEffect, useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import '../EditProfile/EditProfile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react'
import { getLoggedAttendee, updateAttendee } from '../../../features/auth/attendee/authAttendeeSlice';

const EditProfile = () => {
  const { attendee, isLoadingAttendee } = useSelector((state) => state.authAttendee);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLoggedAttendee())
  }, []);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [bio, setBio] = useState("");
  const [linkedin, setLinkedin] = useState('');
  const [interests, setInterests] = useState([]);
  const [foodPreferences, setFoodPreferences] = useState('');

  useEffect(() => {
    if (attendee) {
      setName(attendee.name);
      setSurname(attendee.surname);
      setLinkedin(attendee.linkedin)
      setInterests(attendee.interests || [])
      setFoodPreferences(attendee.dietary_restrictions || [])
    }
  }, [attendee]);

  if (isLoadingAttendee) {
    return <p>Cargando</p>;
  }




  const handleSaveChanges = () => {
    console.log('Guardando cambios...');
    const attendee = {
      name,
      surname,
      bio,
      linkedin,
      interests,
      foodPreferences
    }
    console.log(attendee);
    dispatch(updateAttendee(attendee))
  };

  const handleDiscardChanges = () => {
    console.log('Descartando cambios...');
    setName(attendee.name);
    setSurname(attendee.surname);
    setLinkedin(attendee.linkedin)
    setInterests(attendee.interests || [])
    setFoodPreferences(attendee.dietary_restrictions || [])
  };

  const handleBack = () => {
    navigate('/profile');
  };

  const handleDeleteInterest = (interestToDelete) => {
    setInterests((prevInterests) => prevInterests.filter((interest) => interest !== interestToDelete));
  };

  return (
    <>
      <div className="topProfileEdit">
        <p className="pProfileEdit" onClick={handleBack}>
          <GoChevronLeft className="iconProfileEdit" />
        </p>
      </div>
      <div className="profile-contentEdit">
        <div>
          <span className="titleNameProfileEdit">Nombre</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputFieldEdit"
          />
        </div>
        <div>
          <span className="titleNameProfileEdit">Apellidos</span>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="inputFieldEdit"
          />
        </div>
        <div>
          <span className="titleNameProfileEdit">Biografía</span>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="textareaField"
          />
        </div>
        <div>
          <span className="titleNameProfileEdit">Enlace a Linkedin</span>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="inputFieldEdit"
          />
        </div>
        <div>
          <span className="titleNameProfileEdit">Intereses</span>
          <div className="chipGrid">
            {interests.map((interest, index) => (
              <Chip
                key={index}
                label={interest}
                onDelete={() => handleDeleteInterest(interest)}
                className="uniqueChipProfileEdit"
              />
            ))}
          </div>
        </div>
        <div>
          <span className="titleNameProfileEdit">Preferencias alimenticias</span>
          <input
            type="text"
            value={foodPreferences}
            onChange={(e) => setFoodPreferences(e.target.value)}
            className="inputFieldEdit"
          />
        </div>
      </div>
      <div className='containerButtonProfileEdit'>
        <button className='SaveChangesEdit' onClick={handleSaveChanges}>
          Guardar cambios
        </button>
        <button className='DiscardChangesEdit' onClick={handleDiscardChanges}>
          Descartar
        </button>
      </div>
    </>
  );
};

export default EditProfile;
