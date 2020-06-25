import {combineReducers} from "redux";
import userReducer from "./reducers/UserReducer";

export default combineReducers({
   user: userReducer
});
