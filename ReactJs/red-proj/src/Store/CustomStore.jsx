import { applyMiddleware, createStore } from "redux";
import rootReducer from "./../Reducer/index.jsx";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

// const CustomStore = createStore(
//     anything
// )
const intialState = {}
const middleware = [thunk]
const CustomStore = createStore(
    rootReducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default CustomStore;