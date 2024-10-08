import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAttendees, getAttendeeById } from '../../features/auth/attendee/authAttendeeSlice';
import './AttendeeList.scss';
import './ExternalProfile.scss';
import { Chip } from '@mui/material';
import { Card, CardBody, Text } from '@chakra-ui/react';
import { CiHeart } from 'react-icons/ci';
import { GoChevronLeft } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import getSpeakersRecomended from '../../features/getSpeakersRecomended/getSpeakersRecomendedService'
const AttendeeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { attendees, isLoadingAttendees, isError, message, attendeeSelected } = useSelector(
    (state) => state.authAttendee
  );
  const [selectedAttendee, setSelectedAttendee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [speakers, setSpeakers] = useState("");
  const { notifications, error } = useSelector((state) => state.notificationSlice);

  useEffect(() => {
    dispatch(getAllAttendees());
    
  }, [dispatch]);


  if (speakers== "" ) {
    setSpeakers( getSpeakersRecomended.getSpeakersRecomended())
  } 
  useEffect(() => {
    if (attendeeSelected.length !== 0) {
      setSelectedAttendee(attendeeSelected);
    } else {
      setSelectedAttendee(null); 
    }
  }, [attendeeSelected]);

  if (isLoadingAttendees || !speakers) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{message}</div>;
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  };

  const handleAttendeeClick = async (att) => {
    await dispatch(getAttendeeById(att._id));
  };

  const renderAttendeeProfile = (attendee) => {
    if (!attendee) return null;
    return (
      <div className="mainContent-profile">
        <div className="topProfile">
          <div className="pProfile">
            <GoChevronLeft className="iconProfile" onClick={() => setSelectedAttendee(undefined)} />
            <p className='asistantProfileName'>Perfil Asistente</p>
          </div>
        </div>
        <div className="user-description-profile">
          <div className='divProfileAsistant'>
          <img
              src={
                attendee.profilePic
                  ? `${attendee.profilePic}`
                  : "https://backend-desafio-c3ws.onrender.com/public/noProfilePicture.jpg"
              }
              alt={attendee.name}
              className="profile-picture-asistant"
            />
            <span className='InformationProfileAsistant'>{attendee.name} - {attendee?.job_title}</span>
          </div>
          <div className="interestsProfile">
            {attendee.interests.map((interes, index) => (
              <div className="chipGrid" key={index}>
                <Chip className="uniqueChipProfile" label={interes} />
              </div>
            ))}
          </div>
          <div className="descriptionNameProfileAsistant">
            <span></span>
          </div>
        </div>
        {attendee &&
          attendee.workshops_ids &&
          attendee.workshops_ids.map(workshop => (
            <div className='div-card' key={workshop._id}>
              <Card>
                <CardBody className='card-content'>
                  <Text className='div-horario-card'>
                    {formatTime(workshop.start_date)}
                  </Text>
                  <Text className='div-nombre'>
                    {workshop.speaker_id.name}
                  </Text>
                  <Text className='div-cargo'>
                    {workshop.speaker_id.role}
                  </Text>
                  <Text className='div-descripcion'>
                    {workshop.description}
                  </Text>
                  <div className='containerHeartProfile'>
                    <button className='IlikeitButton'>
                      Me interesa <CiHeart />
                    </button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        <div className='containerButton1to1'>
          <button className='ScanQR'>
            Solicitar One to One
          </button>
        </div>
      </div>
    );
  };

  
  const filteredAttendees = attendees.filter((att) =>
    att.name && att.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {selectedAttendee ? (
        renderAttendeeProfile(selectedAttendee)
      ) : (
        <>
          <div className="suggestions">
            <h2>Nuestras sugerencias para ti</h2>
            <div className="suggestion-cards">
              {attendees &&
                attendees.slice(0, 5).map((att, index) => (
                  <div key={index} className="suggestion-card">
                    <img
                      src={
                        att.profilePic
                          ? `https://backend-desafio-c3ws.onrender.com/public/${att.profilePic}`
                          : "https://backend-desafio-c3ws.onrender.com/public/noProfilePicture.jpg"
                      }
                      alt={att.name}
                      className="suggestion-photo"
                    />
                    <div className="info">
                      <span className="title">{att.title}</span>
                      {att.interests && att.interests.map((interest, idx) => (
                        <span key={idx} className="label">
                          {interest}
                        </span>
                      ))}
                      <h3 className="name">{att.name}</h3>
                      <p className="position">{att.position}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="filters">
            <h2>Filtrar por intereses</h2>
            <div className="filter-buttons">
              <button>Inteligencia Artificial</button>
              <button>Diversidad</button>
              <button>Formación asistida</button>
            </div>
          </div>

          <div className="attendees">
          <h2>Asistentes al evento</h2>
            <input
              type="text"
              placeholder="Buscar asistentes por nombre"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="attendee-cards">
              {filteredAttendees.length > 0 ? (
                filteredAttendees.map((att, index) => (
                  <div key={index} className="attendee-card" onClick={() => handleAttendeeClick(att)}>
                    {!att.profilePic && (
                      <img
                        src="https://backend-desafio-c3ws.onrender.com/public/noProfilePicture.jpg"
                        alt={att.name}
                        className="attendee-photo"
                      />
                    )}
                    {att.profilePic && (
                      <img
                        src={`${att.profilePic}`}
                        alt={att.name}
                        className="attendee-photo"
                      />
                    )}
                    <div className="attendee-info">
                      {att.title && (
                        <span className="attendee-label">
                          <span className="attendee-title">{att.title}</span>
                        </span>
                      )}
                      {att.interests && att.interests.map((interest, idx) => (
                        <span key={idx} className="attendee-label">
                          {interest}
                        </span>
                      ))}
                      <h3 className="attendee-name">{att.name}</h3>
                      <p className="attendee-position">{att.job_title}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No se encontraron asistentes.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AttendeeList;
