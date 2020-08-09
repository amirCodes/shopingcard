import React from 'react';
import Shop from './components/Shop';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import './App.css';
import store from './stores/store'
//const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Shop />
    </Provider>
  );
}

export default App;
