import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import LoginForm from './components/LoginForm'
import EmployeeManagerInterface from './components/EmployeeManagerInterface';
import {BrowserRouter,Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={LoginForm}/>
                        <Route path='/Employees' component={EmployeeManagerInterface} />
                    </div>
                </BrowserRouter> 
            </div>
        );
    }
}
export default App;
