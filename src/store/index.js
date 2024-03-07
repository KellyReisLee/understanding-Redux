
import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './counter-slice';
import authSliceReducer from './auth-slice';


// recebe a reducer function
const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer
  }
});




export default store;