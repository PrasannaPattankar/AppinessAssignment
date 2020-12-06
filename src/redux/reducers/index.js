import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

// Combine all reducers.
export default combineReducers({
    auth: loginReducer
 });
