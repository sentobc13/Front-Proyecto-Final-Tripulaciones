import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authAttendeeService from "./authAttendeeService"


const token = localStorage.getItem("token") || ""
const attendee = JSON.parse(localStorage.getItem("attendee")) || null

const initialState = {
    attendee: attendee,
    token: token,
    isError: false,
    isSuccess: false,
    msg: "",
    isLoadingAttendee: true,
    isLoadingAttendees: true,
    attendeeSelected: []
}



export const authSlice = createSlice({
    name: "authAttendee",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.message = ""
            state.isLoadingAttendee = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAttendee.fulfilled, (state, action) => {
                console.log(action)
                state.isSuccess = true
                state.message = action.payload.msg //Porque guardas el mns en el estado???
            })
            .addCase(registerAttendee.rejected, (state, action) => {
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(login.fulfilled, (state, action) => {
                state.attendee = action.payload.attendee
                state.token = action.payload.token
                state.message = action.payload.message
                state.isSuccess = true
            })
            .addCase(login.rejected, (state, action) => {
                state.message = action.payload
                state.isError = true
            })
            .addCase(getLoggedAttendee.fulfilled, (state, action) => {
                state.attendee = action.payload.attendeeData;
                state.isLoadingAttendee = false;
            })
            .addCase(getLoggedAttendee.pending, (state) => {
                state.isLoadingAttendee = true
            })
            .addCase(getAllAttendees.fulfilled, (state, action) => {
                state.attendees = action.payload;
                state.isLoadingAttendees = false;
            })
            .addCase(getAllAttendees.pending, (state) => {
                state.isLoadingAttendees = true
            })

            .addCase(updateAttendee.fulfilled, (state, action) => {
                state.attendee = action.payload.attendee;
                state.isLoadingAttendee = false;
            })
            .addCase(updateAttendee.pending, (state) => {
                state.isLoadingAttendee = true
            })
            .addCase(getAttendeeById.fulfilled, (state, action) => {
                state.attendeeSelected = action.payload
                state.message = action.payload.msg
                state.isLoadingAttendee = false
            })
            .addCase(getAttendeeById.pending, (state) => {
                state.isLoadingAttendee = true
            })
    }
})

export const registerAttendee = createAsyncThunk(
    "auth/register",
    async (attendee, thunkAPI) => {
        try {
            return await authAttendeeService.registerAttendee(attendee)
        } catch (error) {
            console.error(error)
            const msgError = error.response.data.messages[0]
            return thunkAPI.rejectWithValue(msgError)
        }
    })

export const login = createAsyncThunk("auth/login", async (attendee, thunkAPI) => {
    try {
        return await authAttendeeService.login(attendee)
    } catch (error) {
        console.error(error)
        const msgError = error.response.data.message
        return thunkAPI.rejectWithValue(msgError)
    }
})
export const getLoggedAttendee = createAsyncThunk("auth/getLoggedAttendee", async () => {
    try {
        return await authAttendeeService.getLoggedAttendee();
    } catch (error) {
        console.error(error);
    }
}
)
export const getAllAttendees = createAsyncThunk("auth/getAllAttendees", async () => {
    try {
        return await authAttendeeService.getAllAttendees();
    } catch (error) {
        console.error(error);
    }
}
)
export const getAttendeeById = createAsyncThunk("auth/getAttendeeById", async (id) => {
    try {
        return await authAttendeeService.getAttendeeById(id);
    } catch (error) {
        console.error(error);
    }
}
)
export const updateAttendee = createAsyncThunk("auth/updateAttendee", async (attendee) => {
    try {
        return await authAttendeeService.updateAttendee(attendee);
    } catch (error) {
        console.error(error);
    }
}
)

export default authSlice.reducer

export const { reset, setFilter, clearFilter } = authSlice.actions