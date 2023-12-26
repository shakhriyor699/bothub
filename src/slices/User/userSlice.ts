import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/api";

export const loadUser = createAsyncThunk(
  "@@user/loadUser",
  async () => {
    const res = await axios.get(`${API.userList}`)
    const { data } = res

      return data
    
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
  }
})

export const userReducer = userSlice.reducer