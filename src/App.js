import React, { Component } from 'react';
import MoviesList from './movieslist.js'
import MoviesDesc from './movieDesc.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/moviesdesc/:id" component={MoviesDesc} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
