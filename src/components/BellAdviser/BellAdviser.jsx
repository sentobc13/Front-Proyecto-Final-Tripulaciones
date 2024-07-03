import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotifications } from '../../features/notification/notificationSlice';

const BellAdviser = () => {
    const dispatch = useDispatch();
    const { notifications, error } = useSelector((state) => state.notificationSlice);

    useEffect(() => {
      dispatch(getAllNotifications());
    }, [dispatch]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
       <>
       </>
    );
}

export default BellAdviser;
