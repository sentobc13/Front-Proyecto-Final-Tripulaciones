import React, { useEffect } from 'react'
import { GoChevronLeft } from 'react-icons/go'
import './Notifications.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotifications } from '../../features/notification/notificationSlice'

const Notifications = () => {

    const dispatch = useDispatch()
    const { notifications, error } = useSelector((state) => state.notificationSlice)
    const user = JSON.parse(localStorage.getItem('attendee')) || JSON.parse(localStorage.getItem('speaker'))

    useEffect(() => {
        dispatch(getAllNotifications())
    }, [dispatch])

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
                {notifications.map((noti) => (
                    noti.registrationOne2One.attendee_id === user._id && (
                        <div className="card" key={noti.id}>
                            <div className="cardTitle">{noti.description}</div>
                            <div className="cardContent">aa</div>
                        </div>
                    )
                ))}
            </div>
        </>
    )
}

export default Notifications