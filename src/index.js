import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from "react-redux"
import './index.css';
import App from './App';
import EmployeesApi from "./API/EmployeesApi";
import ParkingLotsApi from "./API/ParkingLotsApi";
import ParkingBoysApi from "./API/ParkingBoysApi";
import DashBoardsApi from "./API/DashBoardsApi";
import ordersApi from "./API/orderApi";

const store = createStore(rootReducer);
const rootEl = document.getElementById('root');
EmployeesApi.init(store.dispatch);
ParkingLotsApi.init(store.dispatch);
ParkingBoysApi.init(store.dispatch);
DashBoardsApi.init(store.dispatch);
ordersApi.init(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);

export default store;