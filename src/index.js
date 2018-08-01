import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import rootReducer from './reducers'
import {Provider} from "react-redux"
import parkingLotApi from "./API/ParkingLotApi";
import './index.css';
import App from './App';

const store = createStore(rootReducer)
const rootEl = document.getElementById('root')

parkingLotApi.init(store.dispatch,"INIT");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)