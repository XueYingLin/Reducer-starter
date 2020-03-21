import React, { useState } from 'react';
import { connect } from 'react-redux';
// Step 2 - use the "connect" function to connect this component to the Redux store

import { toggleEditing, updateTitle } from '../actions/titleActions';
// Step 3 - create an action creator function to handle UI events
// import the AC, and pass it into that mysterious object in the connect function call

const Title = props => {
  console.log({ props }); // => props: {}
  const [newTitleText, setNewTitleText] = useState();
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{' '}
          <i className="far fa-edit" onClick={props.toggleEditing} />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button onClick={() => props.updateTitle(newTitleText)}>
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editing: state.editing,
    title: state.title
  };
};

export default connect(
  mapStateToProps,
  { toggleEditing, updateTitle } // same as { toggleEditing: toggleEditing }
)(Title); // function currying

/* Connect function
  - Gets called twice!
  - The first call takes in a function and an object
    1. The function (usually called "mapStateToProps") maps the state from Redux to the props of the connected component
      - mSTP takes in the state object from the redux store, and returns out of it data that will be added to the props of the connected component
    2. That mysterious object... takes in action creators, wraps the AC inside dispatch (under-the-hood), then adds the enhanced AC function to the props of the connected component
  - The second call takes in the component that we are connecting

  
  inside connect ->

  toggleEditing() ==> { type: 'TOGGLE_EDITING' }

  dispatch( toggleEditing() );


  hooks
  const {editing, title} = useSelector(state => state);
  const dispatch = useDispatch();

  ...
  
  dispatch({ type: 'TOGGLE_EDITING' })
*/
