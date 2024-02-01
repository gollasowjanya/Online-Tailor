import { combineReducers } from 'redux';
import authReducer from './../actions/authSlice'; 

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
