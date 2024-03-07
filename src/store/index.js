
import { createSlice, configureStore } from '@reduxjs/toolkit'

const inicialData = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: inicialData,
  // Here you can create methods.
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.value
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  }
})


// recebe a reducer function
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export default store;