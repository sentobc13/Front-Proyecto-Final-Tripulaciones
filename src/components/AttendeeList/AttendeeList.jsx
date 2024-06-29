
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
    <div className="attendee-list">
      <h1 className="title">Asistentes al evento</h1>
      <div className="attendees">
        {console.log(attendees)}
        {attendees && attendees.map((att, index) => (
          <div key={index} className="attendee-card">
            <img src={att.photo} alt={att.name} className="attendee-photo" />
            <div className="attendee-info">
              <span className="attendee-title">{att.title}</span>
              <span className="attendee-label">{att.label}</span>
              <h2 className="attendee-name">{att.name}</h2>
              <p className="attendee-position">{att.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendeeList;
