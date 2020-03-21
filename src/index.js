import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { titleReducer } from './reducers/titleReducer';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

// Step 1 - create a redux store
// use the 'createStore' function, to ... create a store
const store = createStore(
  titleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log('*********', store.getState());

function App() {
  return (
    <div className="App">
      <Title anotherProp="hello there!" />
      <DragonList />
    </div>
  );
}

// Step 1a - use the 'Provider' component to connect our app to the Redux store
// Pass the redux store to the store prop on Provider
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
