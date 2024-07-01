import { configureStore } from '@reduxjs/toolkit';
import authAttendee from '../features/auth/attendee/authAttendeeSlice';
import authSpeaker from '../features/auth/speaker/authSpeakerSlice';
import WorkshopSlice from '../features/workshop/WorkshopSlice';

const store = configureStore({
    reducer: {
        authAttendee,
        authSpeaker,
        WorkshopSlice
    },
  });
  
  export default store;

  