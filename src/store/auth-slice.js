import { createSlice } from '@reduxjs/toolkit'


// Auth slice state:

const inicialAuthData = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState: inicialAuthData,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;