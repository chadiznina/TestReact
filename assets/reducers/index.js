import { combineReducers } from 'redux';
import auth from './auth'; 
import showOTPInputReducer from './showOTPInputReducer'; 

export default combineReducers({
  auth: auth,
  showOTPInput: showOTPInputReducer,
});
