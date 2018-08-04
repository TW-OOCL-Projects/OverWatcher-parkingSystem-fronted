import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import rootReducer from './reducers'
import {Provider} from "react-redux"
import employeesApi from "./API/EmployeesApi";
import parkingLotApi from './API/ParkingLotsApi'
import DashBoardsApi from './API/DashBoardsApi'
import parkingBoyApi from './API/ParkingBoysApi'
// import parkingLotDetailApi from './API/parkingLotDetailApi'
import order from './API/orderApi'
import './index.css';
import App from './App';

const store = createStore(rootReducer);
const rootEl = document.getElementById('root');
employeesApi.init(store.dispatch);
parkingLotApi.init(store.dispatch);
parkingBoyApi.init(store.dispatch);
DashBoardsApi.init(store.dispatch);
// parkingLotDetailApi.init(store.dispatch);
order.init(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);