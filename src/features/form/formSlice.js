import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    surname: '',
    country: '',
    company: '',
    phone: '',
    position: '',
    linkedin: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;
