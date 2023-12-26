import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "../slices/User/userSlice"



const store = configureStore({
  reducer: {
    users: userReducer
  },
  devTools: true
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch