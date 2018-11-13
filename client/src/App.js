import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./pages/Login.js";
import CreateUser from "./pages/CreateUser.js";
import CreateTicket from "./pages/CreateTicket.js";
import FrontDesk from "./pages/FrontDesk.js"
import Mgmt from "./pages/Mgmt.js";
import AllUsers from "./pages/AllUsers";

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
          <Route exact path="/createticket" component={CreateTicket} />
          <Route exact path="/frontdesk" component={FrontDesk} />
          <Route exact path="/mgmt" component={Mgmt} />
          <Route exact path="/users" component={AllUsers} />
      </div>
    </Router>
    );
  }
}

export default App;
