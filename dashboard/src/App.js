import React from 'react';
import {Dashboard} from './views/Dashboard';
import {LoginScreen} from './views/LoginScreen';
import {CreateUser} from './views/CreateUser';
import {PlayGame} from './views/PlayGame';
import {PlayNow} from './views/PlayNow';
import {PlayLater} from './views/PlayLater';
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
                      <LoginScreen />
                    </Route>
        

              </Switch>

              <Switch>
                    <Route path= "/dashboard">
                      <Dashboard />
                    </Route>
              </Switch>

              <Switch>
                    <Route path= "/createUser">
                      <CreateUser />
                    </Route>
              </Switch>

              <Switch>
                    <Route path= "/playGame">
                      <PlayGame />
                    </Route>
              </Switch>

              <Switch>
                    <Route path= "/playNow">
                      <PlayNow />
                    </Route>
              </Switch>

              <Switch>
                    <Route path= "/playLater">
                      <PlayLater />
                    </Route>
              </Switch>
              
    </Router>

  );
}

export default App;
