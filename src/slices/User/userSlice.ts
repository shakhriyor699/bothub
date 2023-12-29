import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/api";
import { RootState } from "../../store";


export const loadUser = createAsyncThunk(
  "@@user/loadUser",
  async ({ search = '', page = 1, orderBy = 'tokens:asc' }: { search?: string, page?: number, orderBy?: string }) => {
    const { data } = await axios.get(`${API.userList}?${search}&page=${page}&orderBy=${orderBy}`)
    return data
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      data: []
    }
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
export const selectUser = (state: RootState) => state.users.user