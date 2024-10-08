import { configureStore } from '@reduxjs/toolkit';
import authAttendee from '../features/auth/attendee/authAttendeeSlice';
import authSpeaker from '../features/auth/speaker/authSpeakerSlice';
import WorkshopSlice from '../features/workshop/WorkshopSlice';
import ticketsReducer from '../features/tickets/ticketsSlice';
import registrationOne2OneService from '../features/registrationOnetoOne/registrationOnetoOneService';
import notificationSlice from '../features/notification/notificationSlice';

const store = configureStore({
    reducer: {
        authAttendee,
        authSpeaker,
        WorkshopSlice,
        tickets: ticketsReducer, 
        registrationOne2OneService,
        notificationSlice
    },
});

export default store;
