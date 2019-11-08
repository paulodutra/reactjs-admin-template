import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Templates from './routes';
import Header from './../components/Header';

export default class AppLayout extends Component {
    render(){
        return (

            <div id="main-wrapper">
                {/*<Sidebar />*/}
                <div class="content-wrapper">
                    <Header />
                    <Switch>
                    { Templates.map((route, index) => (

                        <Route 
                            path={route.path}
                            exact={route.exact}
                            render={props => <route.template {...props} />} 
                        />
                    ))}
                    </Switch>
                </div>
            </div>
         )
    }
      
    
}