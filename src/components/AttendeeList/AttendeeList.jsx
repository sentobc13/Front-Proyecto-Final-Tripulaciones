
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAttendees } from '../../features/auth/attendee/authAttendeeSlice';
import '../AttendeeList/AttendeeList.scss';

const AttendeeList = () => {
  const dispatch = useDispatch();
  const { attendees, isLoadingAttendees, isError, message } = useSelector((state) => state.authAttendee);

  useEffect(() => {
    dispatch(getAllAttendees());
  }, []);

  if (isLoadingAttendees) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{message}</div>;
  }
  
  return (
    <div className="container">
      <div className="suggestions">
        <h2>Nuestras sugerencias para ti</h2>
        {/* Aquí puedes agregar el contenido de sugerencias */}
        <div className="suggestion-cards">
          {/* Ejemplo de tarjeta de sugerencia */}
          <div className="suggestion-card">
            <img src="path/to/photo.jpg" alt="Sugerencia" />
            <div className="info">
              <span className="title">LMS</span>
              <span className="label">Label</span>
              <h3 className="name">Fernando Redondo</h3>
              <p className="position">CEO en LVIS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="filters">
        <h2>Filtrar por intereses</h2>
        {/* Aquí puedes agregar los botones de filtro */}
        <div className="filter-buttons">
          <button>Inteligencia Artificial</button>
          <button>Diversidad</button>
          <button>Formación asistida</button>
        </div>
      </div>

      <div className="attendees">
        <h2>Asistentes al evento</h2>
        <div className="attendee-cards">
          {attendees && attendees.map((att, index) => (
            <div key={index} className="attendee-card">
                {!att.profilePic &&  <img src="http://localhost:3001/public/noProfilePicture.jpg" alt={att.name} className="attendee-photo" />}
                {att.profilePic && <img src={"http://localhost:3001/public/"+att.profilePic} alt={att.name} className="attendee-photo" />}
              
              <div className="attendee-info">
                <span className="attendee-title">{att.title}</span>
                <span className="attendee-label">{att.label}</span>
                <h3 className="attendee-name">{att.name}</h3>
                <p className="attendee-position">{att.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendeeList;
