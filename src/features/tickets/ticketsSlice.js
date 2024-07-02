import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ticketsService from './ticketsService';

const initialState = {
    tickets: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
};

export const getAllTickets = createAsyncThunk('tickets/getAll', async () => {
    try {
        const tickets = await ticketsService.getAllTickets();
        return tickets;
    } catch (error) {
        console.error('Error obteniendo todos los tickets:', error);
        throw error;
    }
}
);

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getAllTickets.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getAllTickets.fulfilled, (state, action) => {
                state.tickets = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getAllTickets.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message || 'Error obteniendo todos los tickets';
            });
    },
});

export default ticketsSlice.reducer;
