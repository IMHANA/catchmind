import React, { Component } from 'react'
import Main from '../pages/Main/main';
import Month from '../pages/Month/month'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

export default class MainTemplates extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/monthly' component={ Month }/>
                </Switch>
            </Router>
        )
    }
}
