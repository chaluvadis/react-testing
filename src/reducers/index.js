import { combineReducers } from "redux";
import userReducer from "../containers/user/reducer";
import albumsReducer from "../containers/albums/reducer";
export default combineReducers({
    userReducer,
    albumsReducer
});