// workshopSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import WorkshopService from './WorkshopService';

const initialState = {
    workshops: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
};

export const getAllWorkshops = createAsyncThunk('workshops/getAll', async () => {
        try {
            const workshops = await WorkshopService.getWorkshop();
            return workshops;
        } catch (error) {
            console.error('Error obteniendo talleres:', error);
            throw error;
        }
    }
);

const workshopSlice = createSlice({
    name: 'workshops',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllWorkshops.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getAllWorkshops.fulfilled, (state, action) => {
                state.workshops = action.payload
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getAllWorkshops.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message || 'Error obteniendo talleres';
            });
    },
});

export default workshopSlice.reducer;
