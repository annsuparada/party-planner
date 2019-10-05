import React from 'react';
import { Route } from "react-router-dom";
import PrivateRoute from './utilities/PrivateRoute'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home'
import CategoreyPage from './pages/CategoreyPage'
import Parties from './pages/Parties';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/categories" component={CategoreyPage} />
      <Route path="/parties" component={CategoreyPage} />
    </div>
  );
}

export default App;
