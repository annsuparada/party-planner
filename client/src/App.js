import React from 'react';
import { Route, Switch } from "react-router-dom";
// import PrivateRoute from './utilities/PrivateRoute'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home'
import PartyListPage from './pages/PartyListPage'
import Party from './components/partyComponents/Party';
import TestPage from './components/partyComponents/TestPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/party/:id" component={Party} />
        <Route path="/parties" component={PartyListPage} />
        <Route path="/test" component={TestPage} />
      

      </Switch>
    </div>
  );
}

export default App;
