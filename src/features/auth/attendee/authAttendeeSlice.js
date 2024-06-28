import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authAttendeeService from "./authAttendeeService"


const token = localStorage.getItem("token") || ""
const attendee = JSON.parse(localStorage.getItem("attendee")) || null

const initialState = {
    attendee: attendee,
    token: token,
    isError: false,
    isSuccess: false,
    msg: ""
}



export const authSlice = createSlice({
    name: "authAttendee",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                console.log(action)
                state.isSuccess = true
                state.message = action.payload.msg //Porque guardas el mns en el estado???
            })
            .addCase(register.rejected, (state, action) => {
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
    }
})

export const register = createAsyncThunk(
    "auth/register", 
    async(attendee, thunkAPI)=>{
    try {
      return await authAttendeeService.register(attendee)    
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

export default authSlice.reducer

export const { reset } = authSlice.actions