import { SHOW_OTP_INPUT } from '../actions/type';

const initialState = false; // Initial state is false, meaning OTP input is not shown

const showOTPInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_OTP_INPUT:
      return true; // Set to true to show OTP input
    default:
      return state;
  }
};

export default showOTPInputReducer;