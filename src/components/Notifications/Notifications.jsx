import React, { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import './Notifications.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNotification, getAllNotifications, updateNotification } from '../../features/notification/notificationSlice';
import registrationOne2OneService from '../../features/registrationOnetoOne/registrationOnetoOneService';

const Notifications = () => {
    const dispatch = useDispatch();
    const [openNotificationId, setOpenNotificationId] = useState(null);
    const { notifications, isLoading, isError, error } = useSelector(state => state.notificationSlice);
    const user = JSON.parse(localStorage.getItem('attendee')) || JSON.parse(localStorage.getItem('speaker'));

    useEffect(() => {
        dispatch(getAllNotifications());
    }, [dispatch]);

    const aceptSolic = async (noti) => {
        try {
            await registrationOne2OneService.confirmOne2One(noti.registrationOne2One._id);
            await dispatch(deleteNotification(noti._id));
            dispatch({ type: 'DELETE_NOTIFICATION_LOCALLY', payload: noti._id });
        } catch (error) {
            console.error('Error confirmando solicitud uno a uno:', error);
        }
    };

    const rejectSolic = async (noti) => {
        try {
            await registrationOne2OneService.rejectOne2One(noti.registrationOne2One._id);
            await dispatch(deleteNotification(noti._id));
            dispatch({ type: 'DELETE_NOTIFICATION_LOCALLY', payload: noti._id });
        } catch (error) {
            console.error('Error rechazando solicitud uno a uno:', error);
        }
    };

    const handleChevronClick = (id) => {
        setOpenNotificationId(openNotificationId === id ? null : id);
    };

    const updateNotifi = (noti) => {
        const updatedNoti = { ...noti };
        updatedNoti.status = 'view';
        dispatch(updateNotification(updatedNoti))
            .then(() => {
                dispatch({ type: 'UPDATE_NOTIFICATION_LOCALLY', payload: updatedNoti });
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

    if (!Array.isArray(notifications) || notifications.length === 0) {
        return dispatch(getAllNotifications());
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
                {notifications.map((noti) =>
                    user.role === 'attendee' ? (
                        noti.registrationOne2One.attendee_id._id === user._id && (
                            <div className={`${noti.status === 'pending' ? 'cardPending' : 'card'}`} key={noti._id} onClick={() => updateNotifi(noti)}>
                                <div className="cardTitle">
                                    <img
                                        src={
                                            noti.registrationOne2One.speaker_id.profilePic
                                                ? noti.registrationOne2One.speaker_id.profilePic
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
                            noti.status === 'pending' && (
                                <div className={`${noti.status === 'pending' ? 'cardPending' : 'card'}`} key={noti._id}>
                                    <div className="cardTitle">
                                        <img
                                            src={
                                                noti.registrationOne2One.attendee_id.profilePic
                                                    ? noti.registrationOne2One.attendee_id.profilePic
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
                                            <button className="dropdownButton" onClick={() => aceptSolic(noti)}>Aceptar</button>
                                            <button className="dropdownButton" onClick={() => rejectSolic(noti)}>Rechazar</button>
                                        </div>
                                    )}
                                </div>
                            )
                        )
                    )
                )}
            </div>
        </>
    );
}

export default Notifications;
