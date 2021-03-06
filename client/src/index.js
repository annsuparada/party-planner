import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from "react-router-dom";
import { reducer } from "./store/reducers/index";
import 'antd/dist/antd.css';
import './styles/global.scss'
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk,logger));

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

