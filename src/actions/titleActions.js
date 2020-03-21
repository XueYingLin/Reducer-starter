// The 3-part Action Suite (term coined by yours truly!)
// 1. actions -> objects that use a "type" property to describe events that have occurred in the UI, and an optional "payload" property to send data from the UI to the reducer
// 2. action creators - functions that simply create an action object, and return that action object
// 3. ACTION_TYPES - variables to manage action type strings so that we avoid really hard to find bugs from misspelled action types
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_TITLE = 'UPDATE_TITLE';

// action creator
export const toggleEditing = () => {
  // create and return action objects
  return { type: TOGGLE_EDITING };
};

export const updateTitle = newTitle => {
  return { type: UPDATE_TITLE, payload: newTitle };
};
