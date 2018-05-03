import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import ToDo from './components/ToDo';
import store from "./store";
import './ToDo.css';

ReactDOM.render(
    <Provider store={store}>
        <ToDo />
    </Provider>,
    document.getElementById('root')
);