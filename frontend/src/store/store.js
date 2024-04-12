
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer} from "../reducers/userReducer";
import themeReducer from "../features/theme/themeSlice";
import chatReducer from "../features/chat/chatSlice";

const reducer=combineReducers({
  user:userReducer,
      theme: themeReducer,
    chat: chatReducer,
})



let initialState={
}

const middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;