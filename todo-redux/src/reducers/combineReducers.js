import { combineReducers } from "redux";

import value from "./valueReducer";
import list from "./listReducer";

export default combineReducers({
    value,
    list,
})