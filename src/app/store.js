import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';

const store = configureStore({
    reducer: {
        auth,
    },
  });
  
  export default store;

  