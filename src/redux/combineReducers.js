import { combineReducers } from "redux";
import authReducer from './slices/auth/authSlice'


export const rootReducer = combineReducers({
  auth: authReducer,
});
