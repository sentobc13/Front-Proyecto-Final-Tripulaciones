import React, { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import './Notifications.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotifications, updateNotification } from '../../features/notification/notificationSlice';
import registrationOne2OneService from '../../features/registrationOnetoOne/registrationOnetoOneService'

const Notifications = () => {
    const [openNotificationId, setOpenNotificationId] = useState(null);
    const dispatch = useDispatch();
    const { notifications, error, isLoading } = useSelector((state) => state.notificationSlice);
    const user = JSON.parse(localStorage.getItem('attendee')) || JSON.parse(localStorage.getItem('speaker'));


    useEffect(() => {
        dispatch(getAllNotifications());
    }, [dispatch]);

    const aceptSolic = (id) => {
        dispatch(registrationOne2OneService.confirmOne2One(id))
    }

    const rejectSolic = (id) => {
        dispatch(registrationOne2OneService.rejectOne2One(id))
    }

    const handleChevronClick = (id) => {
        setOpenNotificationId(openNotificationId === id ? null : id);
    };

    const updateNotifi = (noti) => {
        const updatedNoti = { ...noti };
        updatedNoti.status = 'view';
        dispatch(updateNotification(updatedNoti))
            .then(() => {
                dispatch(getAllNotifications());
            })
            .catch((error) => {
                console.error('Error updating notification:', error);
            });
    };

    if (isLoading) {
        return <p>Cargando notificaciones...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <div className="topNotification">
                <div className="pNotification">
                    <GoChevronLeft className="iconNotification" />
                    <p className='asistantNotification'>Notificaciones</p>
                </div>
            </div>
            <div className="cardContainer">
                {notifications &&
                    [...notifications]
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Ordenar de más reciente a más antiguo
                        .map((noti) => (
                            user.role === 'attendee' ? (
                                noti.registrationOne2One.attendee_id._id === user._id && (
                                    <div className={`${noti.status === 'pending' ? 'cardPending' : 'card'}`} key={noti._id} onClick={() => updateNotifi(noti)}>
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
                                    <div className={`${noti.status === 'pending' ? 'cardPending' : 'card'}`} key={noti._id}>
                                        <div className="cardTitle">
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
                                                className='desplegarNotifi' onClick={() => handleChevronClick(noti._id)}
                                            />
                                        </div>
                                        {openNotificationId === noti._id && (
                                            <div className="dropdown">
                                                <button className="dropdownButton" onClick={() => aceptSolic(noti.registrationOne2One._id)}>Aceptar</button>
                                                <button className="dropdownButton" onClick={() => rejectSolic(noti.registrationOne2One._id)}>Rechazar</button>
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
