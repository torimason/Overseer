import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./pages/Login.js";
import CreateUser from "./pages/CreateUser.js";

class App extends Component {
  componentDidMount(){
    console.log("Hello World");
  }
  render() {
    return (
      <Router>
      <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/createuser" component={CreateUser} />
      </div>
    </Router>
    );
  }
}

export default App;
