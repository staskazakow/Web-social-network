import {  applyMiddleware, combineReducers, legacy_createStore } from "redux";
import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import { thunk } from "redux-thunk";


let reducers = combineReducers({
    MessagePage: MessageReducer,
    ProfilePage: ProfileReducer,
    UsersPage:UsersReducer,
    SideBar: SideBarReducer,
    auth: authReducer
})
let store = legacy_createStore(reducers,applyMiddleware(thunk))
window.store = store
export default store