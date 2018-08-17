import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from '../Pages/home'

class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ HomePage } />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Router;