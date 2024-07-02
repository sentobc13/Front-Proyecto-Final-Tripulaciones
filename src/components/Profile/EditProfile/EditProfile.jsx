import React, { useEffect, useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import '../EditProfile/EditProfile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react';
import { getLoggedAttendee, updateAttendee } from '../../../features/auth/attendee/authAttendeeSlice';
import axios from 'axios';

const EditProfile = () => {
  const { attendee, isLoadingAttendee } = useSelector((state) => state.authAttendee);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLoggedAttendee());
  }, [dispatch]);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [bio, setBio] = useState("");
  const [linkedin, setLinkedin] = useState('');
  const [interests, setInterests] = useState([]);
  const [foodPreferences, setFoodPreferences] = useState('');
  const [file, setFile] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState('');

  useEffect(() => {
    if (attendee) {
      setName(attendee.name);
      setSurname(attendee.surname);
      setLinkedin(attendee.linkedin);
      setInterests(attendee.interests || []);
      setFoodPreferences(attendee.dietary_restrictions || []);
      setProfilePicUrl(attendee.profilePicUrl || '');
    }
  }, [attendee]);

  if (isLoadingAttendee) {
    return <Spinner />;
  }

  const handleSaveChanges = async () => {
    console.log('Guardando cambios...');
    let updatedProfilePicUrl = profilePicUrl;

    if (file) {
      const formData = new FormData();
      formData.append('profilePic', file);

      try {
        const response = await axios.post('/api/upload-profile-pic', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        updatedProfilePicUrl = response.data.filePath;
      } catch (error) {
        console.error('Error uploading profile pic', error);
        return;
      }
    }

    const attendeeData = {
      name,
      surname,
      bio,
      linkedin,
      interests,
      foodPreferences,
      profilePicUrl: updatedProfilePicUrl
    };

    dispatch(updateAttendee(attendeeData));
  };

  const handleDiscardChanges = () => {
    console.log('Descartando cambios...');
    setName(attendee.name);
    setSurname(attendee.surname);
    setLinkedin(attendee.linkedin);
    setInterests(attendee.interests || []);
    setFoodPreferences(attendee.dietary_restrictions || []);
    setProfilePicUrl(attendee.profilePicUrl || '');
  };

  const handleBack = () => {
    navigate('/profile');
  };

  const handleDeleteInterest = (interestToDelete) => {
    setInterests((prevInterests) => prevInterests.filter((interest) => interest !== interestToDelete));
  };

  const handleFileChangeUser = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="topProfileEdit">
        <p className="pProfileEdit" onClick={handleBack}>
          <GoChevronLeft className="iconProfileEdit" />
        </p>
      </div>
      <div className="profile-contentEdit">
        <div className="profile-pic-section">
          <img src={profilePicUrl || '/default-profile-pic.jpg'} alt="Profile" className="profile-pic" />
          <input type="file" onChange={handleFileChangeUser} />
        </div>
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
      <div className="containerButtonProfileEdit">
        <button className="SaveChangesEdit" onClick={handleSaveChanges}>
          Guardar cambios
        </button>
        <button className="DiscardChangesEdit" onClick={handleDiscardChanges}>
          Descartar
        </button>
      </div>
    </>
  );
};

export default EditProfile;

