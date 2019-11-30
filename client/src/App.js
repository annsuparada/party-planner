import React from 'react';
import { Route, Switch } from "react-router-dom";
// import PrivateRoute from './utilities/PrivateRoute'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home'
import CategoreyPage from './pages/CategoreyPage'
import Parties from './components/party/Parties';
import Party from './components/party/Party'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/categories/:id/party" component={Parties} />
        <Route path="/categories" component={CategoreyPage} />
        <Route path="/party/:id" component={Party} />

      </Switch>
      {/* <Route path="/parties" component={Parties} /> */}
    </div>
  );
}

export default App;
