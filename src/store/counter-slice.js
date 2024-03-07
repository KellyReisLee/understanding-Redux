import { createSlice } from '@reduxjs/toolkit'

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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

