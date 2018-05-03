const defaultState = {
    "value": ""
}

export default function valueReducer(state = defaultState, action) {
    switch (action.type) {
        case "UPDATE_VALUE": {
            return { ...state, value: action.payload };
        }
        default: {
            break;
        }
    }
    return state;
}
