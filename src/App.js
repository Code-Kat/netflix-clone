import React from 'react';
import './css/App.css';
import {Switch, Route} from 'react-router-dom';
import Login from "./pages/Login";

import Main from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
