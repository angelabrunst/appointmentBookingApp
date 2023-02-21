import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AuthPage from './pages/Auth';

import './App.css';

class App extends Component {
    render() {
        return ( 
            <BrowserRouter>
                <Switch>
                    <Redirect from='/' to='/auth' exact />
                    <Route path='/auth' Component={AuthPage} />
                    <Route path='/events' Component={null} />
                    <Route path='/booking' Component={null} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;