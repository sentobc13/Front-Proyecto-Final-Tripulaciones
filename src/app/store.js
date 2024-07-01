import { configureStore } from '@reduxjs/toolkit';
import authAttendee from '../features/auth/attendee/authAttendeeSlice';
import authSpeaker from '../features/auth/speaker/authSpeakerSlice';
import WorkshopSlice from '../features/workshop/WorkshopSlice';
import ticketsReducer from '../features/tickets/ticketsSlice';

const store = configureStore({
    reducer: {
        authAttendee,
        authSpeaker,
        WorkshopSlice,
        tickets: ticketsReducer, 
    },
});

export default store;
