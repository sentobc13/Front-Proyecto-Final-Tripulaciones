import { configureStore } from '@reduxjs/toolkit';
import authAttendee from '../features/auth/attendee/authAttendeeSlice';
import authSpeaker from '../features/auth/speaker/authSpeakerSlice';

const store = configureStore({
    reducer: {
        authAttendee,
        authSpeaker,

    },
  });
  
  export default store;

  