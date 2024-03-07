import { createStore } from 'redux';

const inicialData = { counter: 0, showCounter: true }

const counterReducer = (state = inicialData, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state
}


// recebe a reducer function
const store = createStore(counterReducer);

export default store;