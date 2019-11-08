import React from 'react';

import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
} from 'react-router-dom';

import AppLayout from './containers/AppLayout';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Forgot from './components/Forgot';
import Register from './components/Register';


export default function App() {

  return (
    <Router>
      <Switch>
        {/* Outra forma de registar as rotas*/}
        {/*<Route exact path="/">
          <Home />
        </Route>*/}
        <Route exact path="/login" name="Login" render={props => <Login {...props} /> }/>
        <Route exact path="/forgot" name="Forgot" render={props =>  <Forgot {...props} />} />
        <Route exact path="/register" name="Register" render={ props => <Register {...props} />} />
        <Route path="/" name="Home" render={props => <AppLayout {...props} />} />
        <Route path="*" name="NotFound" render={props =>   <NotFound {...props} />} />
      </Switch>
    </Router>
  );
}
