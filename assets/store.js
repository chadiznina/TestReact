import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';

const store = configureStore({
  reducer: authReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
 
});

export default store;