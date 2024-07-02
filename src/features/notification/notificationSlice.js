import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import notificationService from './notificationService';

const initialState = {
    notifications: [],
    isLoading: false,
    isError: false,
    error: '',
}

export const getAllNotifications = createAsyncThunk('notifications/getAll', async (_, thunkAPI) => {
    try {
        const notification = await notificationService.getAllNotifications();
        return notification
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
}
);

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllNotifications.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getAllNotifications.fulfilled, (state, action) => {
                state.isLoading = false;
                state.notifications = action.payload;
                state.isError = false;
            })
            .addCase(getAllNotifications.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message || 'Error obteniendo todos los tickets';
            });
    },
});

export default notificationSlice.reducer;
