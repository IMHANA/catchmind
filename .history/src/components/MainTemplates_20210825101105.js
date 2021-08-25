import React, { Component } from 'react';
import { Main, Month, DayList, AddTag, NewDay } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class MainTemplates extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/monthly/:month" component={Main} />
          <Route path="/monthly/aa/:month" component={AddTag} />
          <Route path="/monthly" component={Month} />
          {/* <Route path="/list" component={DayList} /> */}
          <Route path="/tagList" component={AddTag} />
          <Route path="/newDay" component={NewDay} />
        </Switch>
      </Router>
    );
  }
}
