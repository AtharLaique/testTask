import {combineReducers} from 'redux';
import AuthReducer from './Auth-Reducer';

export default combineReducers({
  Auth:AuthReducer
});