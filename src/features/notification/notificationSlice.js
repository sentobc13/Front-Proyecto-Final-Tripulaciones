import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import notificationService from './notificationService';

const initialState = {
    notifications: [],
    notificationUpdate: null,
    notificationDelete: null,
    isLoading: false,
    isError: false,
    error: '',
};

export const getAllNotifications = createAsyncThunk(
    'notifications/getAll',
    async (_, thunkAPI) => {
        try {
            const notifications = await notificationService.getAllNotifications();
            return notifications;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateNotification = createAsyncThunk(
    'notifications/update',
    async (newData, thunkAPI) => {
        try {
            const updatedNotification = await notificationService.updateNotification(newData);
            return updatedNotification;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteNotification = createAsyncThunk(
    'notifications/delete',
    async (id, thunkAPI) => {
        try {
            const deletedNotification = await notificationService.deleteNotification(id);
            return deletedNotification;
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
                state.error = action.payload;
            })
            .addCase(updateNotification.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(updateNotification.fulfilled, (state, action) => {
                state.isLoading = false;
                state.notificationUpdate = action.payload;
                state.isError = false;
            })
            .addCase(updateNotification.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })
            .addCase(deleteNotification.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(deleteNotification.fulfilled, (state, action) => {
                state.isLoading = false;
                state.notifications = action.payload;
                state.isError = false;
            })
            .addCase(deleteNotification.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            });
    },
});

export default notificationSlice.reducer;
