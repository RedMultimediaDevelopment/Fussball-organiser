import React from 'react';
import {Dashboard} from './views/Dashboard';
import {LoginScreen} from './views/LoginScreen';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>

              <Switch>
                    <Route path= "/login">
                      <Dashboard />
                    </Route>
                    <Redirect from="*" to="/login" />

              </Switch>

              <Switch>
                    <Route path= "/dashboard">
                      <Dashboard />
                    </Route>
              </Switch>
    </Router>

  );
}

export default App;
