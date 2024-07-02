import { configureStore } from '@reduxjs/toolkit';
import authAttendee from '../features/auth/attendee/authAttendeeSlice';
import authSpeaker from '../features/auth/speaker/authSpeakerSlice';
import WorkshopSlice from '../features/workshop/WorkshopSlice';
<<<<<<< HEAD
import ticketsReducer from '../features/tickets/ticketsSlice';
=======
import registrationOne2OneService from '../features/registrationOnetoOne/registrationOnetoOneService';
>>>>>>> agustin

const store = configureStore({
    reducer: {
        authAttendee,
        authSpeaker,
        WorkshopSlice,
<<<<<<< HEAD
        tickets: ticketsReducer, 
=======
        registrationOne2OneService

>>>>>>> agustin
    },
});

export default store;
