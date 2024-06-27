import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authSpeakerService from "./authSpeakerService"


const token = localStorage.getItem("token") || ""
const speaker = JSON.parse(localStorage.getItem("speaker")) || null

const initialState = {
    speaker: speaker,
    token: token,
    isError: false,
    isSuccess: false,
    msg: ""
}



export const authSlice = createSlice({
    name: "authSpeaker",
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
                state.message = action.payload.msg
            })
            .addCase(register.rejected, (state, action) => {
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(login.fulfilled, (state, action) => {
                state.speaker = action.payload.speaker
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
    async(speaker, thunkAPI)=>{
    try {
      return await authSpeakerService.register(speaker)    
    } catch (error) {
      console.error(error)
      const msgError = error.response.data.messages[0]
      return thunkAPI.rejectWithValue(msgError)
    }
  })
  
export const login = createAsyncThunk("auth/login", async (speaker, thunkAPI) => {
    try {
        return await authSpeakerService.login(speaker)
    } catch (error) {
        console.error(error)
        const msgError = error.response.data.message
        return thunkAPI.rejectWithValue(msgError)
    }
})

export default authSlice.reducer

export const { reset } = authSlice.actions