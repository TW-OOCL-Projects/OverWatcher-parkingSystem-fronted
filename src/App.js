import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import LoginForm from './components/LoginForm'
import EmployeeManagerInterface from './components/EmployeeManagerInterface';
import {BrowserRouter, Route} from 'react-router-dom'
import 'animate.css/animate.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={LoginForm}/>
                        <Route path='/manager' component={EmployeeManagerInterface} />
                        {/*<Route path='/orders' component={OrdersPage} />*/}
                    </div>
                </BrowserRouter> 
            </div>
        );
    }
}
export default App;
