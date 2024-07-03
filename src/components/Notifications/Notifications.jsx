import React, { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import './Notifications.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotifications } from '../../features/notification/notificationSlice';

const Notifications = () => {
    const [openNotificationId, setOpenNotificationId] = useState(null);

    const dispatch = useDispatch();
    const { notifications, error } = useSelector((state) => state.notificationSlice);
    const user = JSON.parse(localStorage.getItem('attendee')) || JSON.parse(localStorage.getItem('speaker'));

    useEffect(() => {
        dispatch(getAllNotifications());
    }, [dispatch]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleChevronClick = (id) => {
        setOpenNotificationId(openNotificationId === id ? null : id);
    };

    return (
        <>
            <div className="topNotification">
                <div className="pNotification">
                    <GoChevronLeft className="iconNotification" />
                    <p className='asistantNotification'>Notificaciones</p>
                </div>
            </div>
            <div className="cardContainer">
                {notifications.map((noti) => (
                    user.role === 'attendee' ? (
                        noti.registrationOne2One.attendee_id._id === user._id && (
                            <div className="card" key={noti._id}>
                                <div className="cardTitle">
                                    <img
                                        src={
                                            noti.registrationOne2One.speaker_id.profilePic
                                                ? `http://localhost:3001/public/${noti.registrationOne2One.speaker_id.profilePic}`
                                                : "http://localhost:3001/public/noProfilePicture.jpg"
                                        }
                                        alt={noti.registrationOne2One.speaker_id.name}
                                        className='imgProfileNotification'
                                    />
                                    {noti.description}<br />
                                    {noti.registrationOne2One.speaker_id.name} 11:00
                                </div>
                            </div>
                        )
                    ) : (
                        noti.registrationOne2One.speaker_id._id === user._id && (
                            <div className="card" key={noti._id} >
                                <div className="cardTitle" onClick={() => handleChevronClick(noti._id)}>
                                    <img
                                        src={
                                            noti.registrationOne2One.attendee_id.profilePic
                                                ? `http://localhost:3001/public/${noti.registrationOne2One.attendee_id.profilePic}`
                                                : "http://localhost:3001/public/noProfilePicture.jpg"
                                        }
                                        alt={noti.registrationOne2One.attendee_id.name}
                                        className='imgProfileNotification'
                                    />
                                    {noti.description}<br />
                                    {noti.registrationOne2One.attendee_id.name} 11:00
                                    <GoChevronRight 
                                        className='desplegarNotifi' 
                                    />
                                </div>
                                {openNotificationId === noti._id && (
                                    <div className="dropdown">
                                        <button className="dropdownButton">Aceptar</button>
                                        <button className="dropdownButton">Rechazar</button>
                                    </div>
                                )}
                            </div>
                        )
                    )
                ))}
            </div>
        </>
    );
}

export default Notifications;
