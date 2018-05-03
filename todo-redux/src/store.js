import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers/combineReducers";

const middleware = applyMiddleware(logger, thunk);

export default createStore(reducer, {}, composeWithDevTools(
    middleware,
));