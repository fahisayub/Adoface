import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer/user.reducer";
import { postReducer } from "./postReducer/post.reducer";




const rootReducer = combineReducers({
   userReducer: userReducer,
   postReducer: postReducer,

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));