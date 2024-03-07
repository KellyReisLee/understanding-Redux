
import { createSlice, configureStore } from '@reduxjs/toolkit'

const inicialCounterData = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: inicialCounterData,
  // Here you can create methods.
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter += action.payload || 0
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  }
})


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

// recebe a reducer function
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;