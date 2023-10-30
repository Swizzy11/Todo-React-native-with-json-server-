import { combineReducers } from "redux";
import { postAPI } from "../../service/PostService";
import { userAPI } from "../../service/UserService";
import auth from './authSlice'

export const rootReducer = combineReducers({
    [postAPI.reducerPath]: postAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    auth: auth
})


