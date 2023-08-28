// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import UserInterfacePage from './components/UserInterfacePage';
import AdminInterfacePage from './components/AdminInterfacePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/user" component={UserInterfacePage} />
        <Route path="/admin" component={AdminInterfacePage} />
      </Switch>
    </Router>
  );
}

export default App;
