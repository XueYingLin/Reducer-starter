import { TOGGLE_EDITING, UPDATE_TITLE } from '../actions/titleActions';

export const initialState = {
  title: 'Dragon Member List 🐲',
  editing: false
};

// default parameters (advanced JS feature)
export const titleReducer = (state = initialState, action) => {
  console.log('&&&&&&&&&', state, action);
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    // NEW CASE HERE
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing
      };
    // case 'ADD_FEATURE':
    //   return {
    //     ...state,
    //     car: {
    //       ...state.car,
    //       features: [...state.car.features, action.payload]
    //     }
    //   }
    default:
      return state;
  }
};
