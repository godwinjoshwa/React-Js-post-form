import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom'
import Join from './components/Join';
import Members from './components/Members';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers'
import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/join" component={Join} />
        <Route path="/members" component={Members} />
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
