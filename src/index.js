import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from "react-redux"
import './index.css';
import App from './App';

const store = createStore(rootReducer);
const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);

export default store;