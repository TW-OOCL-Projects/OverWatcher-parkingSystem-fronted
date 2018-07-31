import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import LoginForm from './components/LoginForm'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">OverWatcher Parking System</h1>
                </header>
                <LoginForm/>
            </div>
        );
    }
}
export default App;
