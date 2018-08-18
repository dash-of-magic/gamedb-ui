import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from '../Pages/home'
import LoginPage from '../Pages/login'

class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Redirect from='*' to='/' /> */}
                    <Route exact path='/' component={ HomePage } />
                    <Route path='/login' component={ LoginPage } />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Router;