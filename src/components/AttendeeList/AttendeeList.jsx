import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAttendees } from '../../features/auth/attendee/authAttendeeSlice';
import '../AttendeeList/AttendeeList.scss';

const AttendeeList = () => {
  const dispatch = useDispatch();
  const { attendees, isLoadingAttendees, isError, message } = useSelector(
    (state) => state.authAttendee
  );

  useEffect(() => {
    dispatch(getAllAttendees());
  }, [dispatch]);

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
        <div className="suggestion-cards">
          {attendees &&
            attendees.slice(0, 5).map((att, index) => ( // Show max 3 suggestions
              <div key={index} className="suggestion-card">
                <img
                  src={
                    att.profilePic
                      ? `http://localhost:3001/public/${att.profilePic}`
                      : "http://localhost:3001/public/noProfilePicture.jpg"
                  }
                  alt={att.name}
                  className="suggestion-photo"
                />
                <div className="info">
                  <span className="title">{att.title}</span>
                  {att.interests && ( // Display interests if available
                    <span className="label">
                      {att.interests.join(', ')}
                    </span>
                  )}
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
        <div className="attendee-cards">
          {attendees &&
            attendees.map((att, index) => (
              <div key={index} className="attendee-card">
                {!att.profilePic && (
                  <img
                    src="http://localhost:3001/public/noProfilePicture.jpg"
                    alt={att.name}
                    className="attendee-photo"
                  />
                )}
                {att.profilePic && (
                  <img
                    src={`http://localhost:3001/public/${att.profilePic}`}
                    alt={att.name}
                    className="attendee-photo"
                  />
                )}
                <div className="attendee-info">
                  <span className="attendee-title">{att.title}</span>
                  {att.interests && ( // Display interests if available
                    <span className="label">
                      {att.interests.join(', ')}
                    </span>
                  )}
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
