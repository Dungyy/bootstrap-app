import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
   return (
    <React.Fragment> 
      <Router>
        <Switch>
          <Route exact path="/" component />
          <Route exact path="/about" component />
          <Route exact path="/contact" component />
          <Route component />
        </Switch>
      </Router>
    </React.Fragment>
    );
  }
}

export default App;
