import React from 'react';

import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
} from 'react-router-dom';

/** Provider Toast Notification */
import { ToastProvider } from 'react-toast-notifications';

import AppLayout from './containers/AppLayout';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Forgot from './components/Forgot';
import Register from './components/Register';
import ToastCustom from './components/inside/ToastCustom';


export default function App() {

  return (
    <Router>
      <Switch>
        {/* Outra forma de registar as rotas*/}
        {/*<Route exact path="/">
          <Home />
        </Route>*/}
        {/*<ToastProvider>*/}
        <ToastProvider components={{ Toast: ToastCustom }}>
          <Route exact path="/login" name="Login" render={props => <Login {...props} /> }/>
          <Route exact path="/forgot" name="Forgot" render={props =>  <Forgot {...props} />} />
          <Route exact path="/register" name="Register" render={ props => <Register {...props} />} />
          <Route path="/" name="Home" render={props => <AppLayout {...props} />} />
          <Route path="*" name="NotFound" render={props =>   <NotFound {...props} />} />
        </ToastProvider>
      </Switch>
    </Router>
  );
}
