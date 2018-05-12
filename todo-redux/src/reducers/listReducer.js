const defaultState = {
  list: [{ task: 'Go to the GYM', isCompleted: false }],
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'INITIALIZE_LIST': {
      return { ...state, list: action.payload };
    }
    case 'ADD_TO_LIST': {
      return { ...state, list: [...state.list, action.payload] };
    }
    case 'REMOVE_FROM_LIST': {
      return {
        ...state,
        list: state.list.filter((item, index) => index !== action.payload),
      };
    }
    case 'UPDATE_LIST': {
      return {
        ...state,
        list: state.list.map((item, index) => {
          if (index === action.payload[1]) {
            return { ...item, task: action.payload[0] };
          } else {
            return item;
          }
        }),
      };
    }
    default: {
      break;
    }
  }
  return state;
}
